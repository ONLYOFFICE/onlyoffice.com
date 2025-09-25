import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { parse } from "cookie";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { validateEmail } from "@src/utils/validators";
import { LoginEmail } from "@src/components/emails/LoginEmail";
import { RegisterEmail } from "@src/components/emails/RegisterEmail";
import {
  generateKey,
  findByEmail,
  sendEmail,
} from "@src/lib/requests/thirdparty";
import { getT } from "@src/lib/helpers/i18next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const {
      locale,
      desktop,
      email,
      spam,
      awsRegion,
      partnerId,
      affiliateId,
      hCaptchaResponse,
    } = req.body;

    if (
      typeof email !== "string" ||
      !validateEmail(email) ||
      !spam ||
      typeof spam !== "string"
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

    const generateKeyData = await generateKey({
      email,
    });

    if (generateKeyData.status !== 200) {
      return res
        .status(generateKeyData.status)
        .json({ status: "error", message: generateKeyData.message });
    }

    const cookies = parse(req.headers.cookie || "");
    const utmCampaign = cookies.utm_campaign || null;
    const emailKey = `${generateKeyData.data.emailKey}1`;
    const langPrefix = locale === "en" ? "" : locale;
    const t = await getT(locale, ["LoginEmail", "RegisterEmail"]);

    const queryString = new URLSearchParams();
    if (desktop) queryString.append("desktop", desktop);
    queryString.append("epkey", emailKey);
    queryString.append("eskey", generateKeyData.data.linkKey);
    if (langPrefix) queryString.append("language", langPrefix);
    if (awsRegion) queryString.append("awsRegion", awsRegion);
    queryString.append("spam", spam);
    if (partnerId) queryString.append("partnerId", partnerId);
    if (affiliateId) queryString.append("affiliateId", affiliateId);
    if (utmCampaign) queryString.append("campaign", utmCampaign);

    const queryParams = queryString.toString();
    const baseUrl = `${process.env.BASE_URL}${langPrefix ? `/${langPrefix}` : ""}`;

    const findByEmailData = await findByEmail({
      email,
    });

    if (findByEmailData.status !== 200) {
      return res
        .status(findByEmailData.status)
        .json({ status: "error", message: findByEmailData.message });
    }

    const isLogin = findByEmailData.data.length > 0;

    const sendEmailData = await sendEmail({
      email,
      Subject: isLogin
        ? t("YourLoginLinkToOODocSpace")
        : t("YourConfirmationLinkForOODocSpace"),
      Body: isLogin
        ? await LoginEmail({
            baseUrl,
            queryParams,
            unsubscribeId: emailKey,
            language: locale,
          })
        : await RegisterEmail({
            baseUrl,
            queryParams,
            unsubscribeId: emailKey,
            language: locale,
          }),
    });

    if (sendEmailData.status !== 200) {
      return res
        .status(sendEmailData.status)
        .json({ status: "error", message: sendEmailData.message });
    }

    return res.status(200).json({ status: "success", message: email });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
