import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { WhitePapersEmail } from "@src/components/emails/WhitePapersEmail";

interface IAddWhitePapersData {
  full_name: string;
  email: string;
  company_name: string;
  product: string;
  lang: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const {
    fullName,
    email,
    company,
    id_url,
    languageCode,
    from,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !company ||
      typeof company !== "string" ||
      !id_url ||
      typeof id_url !== "string" ||
      !languageCode ||
      typeof languageCode !== "string" ||
      typeof from !== "string" ||
      (!isTestEmail(email) &&
        (!hCaptchaResponse || typeof hCaptchaResponse !== "string"))
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const ip = getClientIp(req);

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "hCaptchaInvalid",
        });
      }
    }

    try {
      const addWhitePapersData: IAddWhitePapersData = {
        full_name: fullName,
        email,
        company_name: company,
        product: id_url,
        lang: languageCode,
      };

      await db.teamlabsite.query("INSERT INTO whitepapers_request SET ?", [
        addWhitePapersData,
      ]);
    } catch (error) {
      logError((req.url || "").split("?")[0], "DB", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SALES_EMAIL!],
        subject: `Request${from ? ` [from: ${from}]` : ""}`,
        html: WhitePapersEmail({
          fromPage: from,
          fullName,
          email,
          company,
          product: id_url,
          languageCode,
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
    }

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
