import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { validateEmail } from "@src/utils/validators";
import { LoginEmail } from "@src/components/emails/LoginEmail";
import { RegisterEmail } from "@src/components/emails/RegisterEmail";
import { findByEmail } from "@src/lib/requests/thirdparty/findByEmail";
import { generateKey } from "@src/lib/requests/thirdparty/generate";
import { sendEmail } from "@src/lib/requests/thirdparty/send";
import { getLanguage } from "@src/lib/helpers/getLanguage";
import { getServerI18n } from "@src/lib/helpers/getServerI18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!(await checkRateLimit(req, res))) return;

  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const {
      desktop,
      email,
      spam,
      awsRegion,
      partnerId,
      affiliateId,
      hCaptchaResponse,
    } = req.body;

    const ip = getClientIp(req);

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "errorHCaptchaInvalid",
          error: hCaptchaResult.error,
        });
      }
    }

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

    if (typeof spam !== "string") {
      return res
        .status(400)
        .json({ status: "error", message: "Missing 'spam' field" });
    }

    const { data: generateKeyData } = await generateKey({ email });
    const cookies = parse(req.headers.cookie || "");
    const utmCampaign = cookies.utm_campaign || null;
    const emailKey = `${generateKeyData.emailKey}1`;
    const language = getLanguage(req) === "en" ? "" : getLanguage(req);
    const i18n = await getServerI18n(language, ["docspace-registration"]);

    const queryString = new URLSearchParams();
    if (desktop) queryString.append("desktop", desktop);
    queryString.append("epkey", emailKey);
    queryString.append("eskey", generateKeyData.linkKey);
    if (language) queryString.append("language", language);
    if (awsRegion) queryString.append("awsRegion", awsRegion);
    queryString.append("spam", spam);
    if (partnerId) queryString.append("partnerId", partnerId);
    if (affiliateId) queryString.append("affiliateId", affiliateId);
    if (utmCampaign) queryString.append("campaign", utmCampaign);

    const queryParams = queryString.toString();
    const baseUrl = `${req.headers.origin}${language ? `/${language}` : ""}`;

    const { data: existingTernants } = await findByEmail({ email });

    const isLogin = existingTernants.length > 0;
    const subject = isLogin
      ? i18n.t("YourLoginLinkToOODocSpace")
      : i18n.t("YourConfirmationLinkForOODocSpace");
    const body = isLogin
      ? await LoginEmail({
          baseUrl,
          queryParams,
          unsubscribeId: emailKey,
          language,
        })
      : await RegisterEmail({
          baseUrl,
          queryParams,
          unsubscribeId: emailKey,
          language,
        });

    await sendEmail({ email, subject, body });

    return res.status(200).json({ status: "success", message: email });
  } catch (err) {
    console.error("register error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
