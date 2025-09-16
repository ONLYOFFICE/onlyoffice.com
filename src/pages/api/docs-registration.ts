import { NextApiRequest, NextApiResponse } from "next";
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
    referer,
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

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "errorHCaptchaInvalid",
          error: hCaptchaResult.error,
        });
      }
    }

    const errorMessages = [];

    const webPaymentRequest = async () => {
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

        return {
          status: "success",
          message: "webPaymentTrialRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Web Payment Trial returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const webPaymentResult = await webPaymentRequest();
    if (webPaymentResult?.status === "error") {
      errorMessages.push(
        `webPaymentTrialRequest: ${webPaymentResult?.message}`,
      );
    }

    if (referer) {
      const addDocsRegistrationResult = await addDocsRegistrationRequest({
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

      if (addDocsRegistrationResult?.status === "error") {
        errorMessages.push(
          `landingRequest: ${addDocsRegistrationResult?.message}`,
        );
      }
    }

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

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Docs Registration api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
