import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { getDisplayNameWithoutParentheses } from "@src/utils/getDisplayNameWithoutParentheses";
import { addDocsRegistrationRequest } from "@src/lib/requests/addDocsRegistrationRequest";
import { emailTransporter } from "@src/config/email/transporter";
import { DocsRegistrationRequestEmail } from "@src/components/emails/DocsRegistrationRequestEmail";

interface IWebPaymentDCData {
  FName: string;
  Email: string;
  Phone: string;
  TariffPlan: string;
  Platform: string;
  LanguageCode: string;
  Language: string;
  AffiliateId: string;
  AffiliateToken: string;
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
    tariffPlan,
    docsPlatform,
    affiliateId,
    affiliateToken,
    from,
    languageCode,
    language,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      typeof phone !== "string" ||
      !tariffPlan ||
      typeof tariffPlan !== "string" ||
      typeof docsPlatform !== "string" ||
      typeof affiliateId !== "string" ||
      typeof affiliateToken !== "string" ||
      typeof from !== "string" ||
      !languageCode ||
      typeof languageCode !== "string" ||
      !language ||
      typeof language !== "string" ||
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

    const errorMessages = [];

    try {
      const webPaymentEnterpiseData: IWebPaymentDCData = {
        FName: fullName,
        Email: email,
        Phone: phone,
        TariffPlan: tariffPlan,
        Platform: docsPlatform,
        LanguageCode: getDisplayNameWithoutParentheses(languageCode),
        Language: language,
        AffiliateId: affiliateId,
        AffiliateToken: affiliateToken,
      };

      await fetch(process.env.WEB_PAYMENT_DC_TRIAL_URL!, {
        method: "POST",
        body: new URLSearchParams(Object.entries(webPaymentEnterpiseData)),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Web Payment", error);
      errorMessages.push(
        `Web Payment: ${error instanceof Error ? error.message : error}`,
      );
    }

    if (req.headers.referer) {
      try {
        await addDocsRegistrationRequest({
          first_name: fullName,
          last_name: "",
          email,
          phone,
          tariff_plan: tariffPlan,
          platform: docsPlatform,
          ip,
          lang: languageCode,
          create_on: new Date(),
          spam: 0,
          calls: 1,
        });
      } catch (error) {
        logError((req.url || "").split("?")[0], "DB", error);
        errorMessages.push(
          `DB: ${error instanceof Error ? error.message : error}`,
        );
      }
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SALES_EMAIL!],
        subject: `${errorMessages.length ? "[Error] " : ""}${fullName} - Docs Registration Request [from: ${from}]`,
        html: DocsRegistrationRequestEmail({
          fullName,
          email,
          phone,
          tariffPlan,
          platform: docsPlatform,
          languageCode,
          affiliateId,
          affiliateToken,
          errorText: errorMessages.join("<br/><br/>"),
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
