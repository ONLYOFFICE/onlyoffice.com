import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { db } from "@src/config/db/site";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { MailTemplateEmail } from "@src/components/emails/MailTemplateEmail";

interface IRegistrationCanceledData {
  switched_to_on_premises: "0" | "1";
  experienced_technical_problems: "0" | "1";
  did_not_find_necessary_features: "0" | "1";
  privacy_concerns_or_legal_violation: "0" | "1";
  i_rarely_use_onlyoffice: "0" | "1";
  other: "0" | "1";
  message: string;
  email: string;
  ip: string | string[] | null;
  create_on: Date;
  lang: string;
  spam: 0 | 1;
  calls: 0 | 1;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const {
    mark1,
    mark2,
    mark3,
    mark4,
    mark5,
    mark6,
    checkboxes,
    message,
    email,
    locale,
    spam,
    calls,
    from,
    hCaptchaResponse,
  } = req.body;

  try {
    const isMarkValid = (val: string): val is "0" | "1" =>
      val === "0" || val === "1";
    const isBinaryNumber = (val: number): val is 0 | 1 =>
      val === 0 || val === 1;

    if (
      !isMarkValid(mark1) ||
      !isMarkValid(mark2) ||
      !isMarkValid(mark3) ||
      !isMarkValid(mark4) ||
      !isMarkValid(mark5) ||
      !isMarkValid(mark6) ||
      typeof checkboxes !== "string" ||
      typeof message !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !locale ||
      typeof locale !== "string" ||
      !isBinaryNumber(spam) ||
      !isBinaryNumber(calls) ||
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

    if (req.headers.referer) {
      try {
        const registrationCanceledData: IRegistrationCanceledData = {
          switched_to_on_premises: mark1,
          experienced_technical_problems: mark2,
          did_not_find_necessary_features: mark3,
          privacy_concerns_or_legal_violation: mark4,
          i_rarely_use_onlyoffice: mark5,
          other: mark6,
          message,
          email,
          ip,
          create_on: new Date(),
          lang: locale,
          spam,
          calls,
        };

        await db.teamlabsite.query(
          "INSERT INTO registration_cancelled_request SET ?",
          [registrationCanceledData],
        );
      } catch (error) {
        logError((req.url || "").split("?")[0], "DB", error);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.FEEDBACK_EMAIL!, process.env.SUPPORT_EMAIL!],
        subject: `Request ${from}`,
        html: MailTemplateEmail({
          fromPage: from,
          checkboxes,
          message,
          email,
          languageCode: locale,
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
