import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { validateEmail } from "@src/utils/validators";
import { LoginEmail } from "@src/components/emails/LoginEmail";
import { RegisterEmail } from "@src/components/emails/RegisterEmail";
import { findByEmail } from "@src/lib/requests/thirdparty/findByEmail";
import { generateKey } from "@src/lib/requests/thirdparty/generate";
import { sendEmail } from "@src/lib/requests/thirdparty/send";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const {
      desktop,
      email,
      spam,
      language,
      awsRegion,
      partnerId,
      affiliateId,
      emailSubject,
    } = req.body;

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

    if (typeof emailSubject !== "object") {
      return res
        .status(400)
        .json({ status: "error", message: "Missing 'emailSubject' field" });
    }

    const { data: generateKeyData } = await generateKey({ email });
    const cookies = parse(req.headers.cookie || "");
    const utmCampaign = cookies.utm_campaign || null;

    const queryString = new URLSearchParams();
    if (desktop) queryString.append("desktop", desktop);
    queryString.append("epkey", generateKeyData.emailKey);
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
    const subject = isLogin ? emailSubject.login : emailSubject.register;
    const body = isLogin
      ? LoginEmail({
          baseUrl,
          queryParams,
          unsubscribeId: generateKeyData.emailKey,
        })
      : RegisterEmail({
          baseUrl,
          queryParams,
          unsubscribeId: generateKeyData.emailKey,
        });

    await sendEmail({ email, subject, body });

    return res.status(200).json({ status: "success", message: email });
  } catch (err) {
    console.error("sendemail error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
