import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { WebinarsForUsEmail } from "@src/components/emails/WebinarsForUsEmail";
import { WebinarsForUserEmail } from "@src/components/emails/WebinarsForUserEmail";
import { generateKey } from "@src/lib/requests/thirdparty/generate";

interface IWebinarsData {
  full_name: string;
  email: string;
  company_name: string;
  webinar_theme: string;
  webinar_lang: string;
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
    companyName,
    webinarTheme,
    webinarDate,
    questions,
    webinarLang,
    from,
    emailSubject,
    hCaptchaResponse,
    locale,
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
    const cookies = parse(req.headers.cookie || "");

    const addWebinarsRequest = async () => {
      try {
        const addWebinarsRequestData: IWebinarsData = {
          full_name: fullName,
          email,
          company_name: companyName,
          webinar_theme: webinarTheme,
          webinar_lang: webinarLang,
        };

        await db.teamlabsite.query("INSERT INTO webinar_request SET ?", [
          addWebinarsRequestData,
        ]);

        return {
          status: "success",
          message: "webinarsRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Insert Webinars api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const addWebinarsRequestResult = await addWebinarsRequest();
    if (addWebinarsRequestResult.status === "error") {
      errorMessages.push(
        `webinarsrequest: ${addWebinarsRequestResult.message}`,
      );
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.WEBINARS_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - Webinars For Us Request (${webinarTheme}) ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: WebinarsForUsEmail({
        fullName,
        email,
        companyName,
        webinarTheme,
        webinarDate,
        webinarLang,
        questions,
      }),
    });

    const { data: generateKeyData } = await generateKey({ email });
    const baseUrl = `${req.headers.origin}${locale === "en" ? "" : `/${locale}`}`;
    const emailKey = `${generateKeyData.emailKey}1`;

    await transporter.sendMail({
      from,
      to: email,
      subject: emailSubject,
      html: WebinarsForUserEmail({
        webinarTheme,
        webinarDate,
        language: locale,
        baseUrl,
        unsubscribeId: emailKey,
      }),
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Webinars api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
