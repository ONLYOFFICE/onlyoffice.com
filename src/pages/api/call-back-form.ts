import { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { logError } from "@src/lib/helpers/logger";
import { db } from "@src/config/db/site";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { CallBackFormEmail } from "@src/components/emails/CallBackFormEmail";

interface IAddCallBackFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  language: string;
  desireddatetime: string;
  timezone: string;
  calltheme: string;
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
    phone,
    language,
    desireddatetime,
    timezone,
    calltheme,
    product,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !phone ||
      typeof phone !== "string" ||
      !language ||
      typeof language !== "string" ||
      !desireddatetime ||
      typeof desireddatetime !== "string" ||
      !timezone ||
      typeof timezone !== "string" ||
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

    const errorMessages: string[] = [];

    try {
      const addCallBackForm: IAddCallBackFormData = {
        first_name: fullName,
        last_name: "",
        email,
        phone,
        language,
        desireddatetime,
        timezone,
        calltheme,
      };

      await db.teamlabsite.query("INSERT INTO callback_request SET ?", [
        addCallBackForm,
      ]);
    } catch (error) {
      logError((req.url || "").split("?")[0], "DB", error);
      errorMessages.push(
        `DB: ${error instanceof Error ? error.message : "Unknown error occurred"}`,
      );
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: process.env.CALLBACK_EMAIL!,
        subject: "New callback request",
        html: CallBackFormEmail({
          fullName,
          email,
          phone,
          language,
          desireddatetime,
          timezone,
          calltheme,
          product,
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
    }

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0].split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
