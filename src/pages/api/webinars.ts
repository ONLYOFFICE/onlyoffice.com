import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { logError } from "@src/lib/helpers/logger";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { NextApiRequest, NextApiResponse } from "next";
import { WebinarsForUsEmail } from "@src/components/emails/WebinarsForUsEmail";
import { WebinarsForUserEmail } from "@src/components/emails/WebinarsForUserEmail";
import { generateKey } from "@src/lib/requests/thirdparty";
import { getT } from "@src/lib/helpers/i18next";

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

  if (!(await checkRateLimit(req, res))) return;

  const {
    fullName,
    email,
    companyName,
    webinarTheme,
    webinarDate,
    questions,
    webinarLang,
    from,
    hCaptchaResponse,
    locale,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !companyName ||
      typeof companyName !== "string" ||
      !webinarTheme ||
      typeof webinarTheme !== "string" ||
      !webinarDate ||
      typeof webinarDate !== "string" ||
      typeof questions !== "string" ||
      !webinarLang ||
      typeof webinarLang !== "string" ||
      typeof from !== "string" ||
      !locale ||
      typeof locale !== "string" ||
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

    const t = await getT(locale, "WebinarsForUserEmail");
    const past = new Date(webinarDate).getTime() < Date.now();

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
    } catch (error) {
      logError((req.url || "").split("?")[0], "DB", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    const transporter = emailTransporter();

    try {
      await transporter.sendMail({
        to: [process.env.WEBINARS_EMAIL!],
        subject: `Webinar subscription${past ? " past" : ""}`,
        html: WebinarsForUsEmail({
          fullName,
          email,
          companyName,
          webinarTheme,
          webinarDate,
          webinarLang,
          questions: questions.replace(/\n/g, "<br/>"),
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
    }

    if (past === false) {
      const generateKeyData = await generateKey({
        email,
      });

      if (generateKeyData.status !== 200) {
        return res
          .status(generateKeyData.status)
          .json({ status: "error", message: generateKeyData.message });
      }

      const baseUrl = `${process.env.BASE_URL}${locale === "en" ? "" : `/${locale}`}`;
      const emailKey = `${generateKeyData.data.emailKey}1`;

      try {
        await transporter.sendMail({
          to: email,
          subject: t("WebinarSubject"),
          html: await WebinarsForUserEmail({
            webinarTheme,
            webinarDate,
            language: locale,
            baseUrl,
            unsubscribeId: emailKey,
          }),
        });
      } catch (error) {
        logError((req.url || "").split("?")[0], "Email transporter", error);
      }
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
