import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { getDisplayNameWithoutParentheses } from "@src/utils/getDisplayNameWithoutParentheses";
import { addLandingRequest } from "@src/lib/requests/addLandingRequest";
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
    docPlatform,
    locale,
    affiliateId,
    affiliateToken,
    from,
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const webPaymentRequest = async () => {
      try {
        const webPaymentEnterpiseData: IWebPaymentDCData = {
          FName: fullName,
          Email: email,
          Phone: phone,
          TariffPlan: tariffPlan,
          Platform: docPlatform,
          LanguageCode: getDisplayNameWithoutParentheses(locale),
          Language: locale,
          AffiliateId: affiliateId,
          AffiliateToken: affiliateToken,
        };
        await fetch(
          process.env.WEB_PAYMENT_DC_TRIAL_URL!,
          {
            method: "POST",
            body: new URLSearchParams(Object.entries(webPaymentEnterpiseData))
          },
        );

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
      const addLandingResult = await addLandingRequest({
        first_name: fullName,
        last_name: "",
        email,
        phone,
        operating_system: null,
        company_name: companyName,
        company_size: null,
        position: null,
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
        fromPage: from,
        utm_source: cookies.utm_source || null,
        utm_campaign: cookies.utm_campaign || null,
        utm_content: cookies.utm_content || null,
        utm_term: cookies.utm_term || null,
        create_on: new Date(),
        spam: 0,
        calls: 1,
        ownerId: null,
        coupon: null,
        region: null,
        portal_id: null,
        source: null,
        choice_language: "",
        website,
      });

      if (addLandingResult?.status === "error") {
        errorMessages.push(`landingRequest: ${addLandingResult?.message}`);
      }
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${fullName} - Docs Registration Request [from: ${from}]`,
      html: DocsRegistrationRequestEmail({
        fullName,
        email,
        phone,
        tariffPlan,
        platform,
        languageCode: locale,
        affiliateId,
        affiliateToken,
        errorText: errorMessages.join("<br/><br/>"),
      })
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Docs Registration api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
