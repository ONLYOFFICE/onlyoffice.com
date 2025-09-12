import { NextApiRequest, NextApiResponse } from "next";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
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
    const ip =
      (Array.isArray(req.headers["x-forwarded-for"])
        ? req.headers["x-forwarded-for"][0]
        : req.headers["x-forwarded-for"]
      )?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;

    const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

    if (!hCaptchaResult.success) {
      return res.status(400).json({
        status: "errorHCaptchaInvalid",
        error: hCaptchaResult.error,
      });
    }

    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const addWhitePapersDataRequest = async () => {
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

        return {
          status: "success",
          message: "whitepapersRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Add WhitePapers api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const addWhitePapersDataResult = await addWhitePapersDataRequest();
    if (addWhitePapersDataResult.status === "error") {
      errorMessages.push(
        `whitepapersRequest: ${addWhitePapersDataResult.message}`,
      );
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${company} - WhitePapers Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: WhitePapersEmail({
        fromPage: from,
        fullName,
        email,
        company,
        product: id_url,
        languageCode,
      }),
    });

    res.status(200).json({
      status: "success",
      message: "success",
    });
  } catch (error) {
    console.error("WhitePapers api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
