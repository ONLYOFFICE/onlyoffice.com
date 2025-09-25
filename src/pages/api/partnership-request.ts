import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { validateEmail } from "@src/utils/validators";
import { parse } from "cookie";
import { emailTransporter } from "@src/config/email/transporter";
import { PartnershipRequestEmail } from "@src/components/emails/PartnershipRequestEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const {
    firstName,
    lastName,
    positionTitle,
    email,
    phone,
    companyName,
    website,
    numberEmployees,
    targetMarketSegments,
    pleaseSpecify,
    salesOpportunities,
    promotion,
    demoPortal,
    productTraining,
    salesTraining,
    infoSource,
    comment,
    spam,
    partnerReqType,
    locale,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !firstName ||
      typeof firstName !== "string" ||
      !lastName ||
      typeof lastName !== "string" ||
      !positionTitle ||
      typeof positionTitle !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      typeof phone !== "string" ||
      !companyName ||
      typeof companyName !== "string" ||
      !website ||
      typeof website !== "string" ||
      !numberEmployees ||
      typeof numberEmployees !== "string" ||
      !targetMarketSegments ||
      typeof targetMarketSegments !== "string" ||
      !pleaseSpecify ||
      typeof pleaseSpecify !== "string" ||
      !salesOpportunities ||
      typeof salesOpportunities !== "string" ||
      typeof promotion !== "string" ||
      !demoPortal ||
      typeof demoPortal !== "string" ||
      !productTraining ||
      typeof productTraining !== "string" ||
      !salesTraining ||
      typeof salesTraining !== "string" ||
      typeof infoSource !== "string" ||
      typeof comment !== "string" ||
      typeof spam !== "boolean" ||
      !partnerReqType ||
      typeof partnerReqType !== "string" ||
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

    const cookies = parse(req.headers.cookie || "");

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SALES_EMAIL!],
        subject: `${companyName} Partner Request ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`,
        html: PartnershipRequestEmail({
          firstName: firstName,
          lastName: lastName,
          positionTitle: positionTitle,
          email,
          phone,
          companyName,
          website,
          numberEmployees,
          targetMarketSegments,
          pleaseSpecify,
          salesOpportunities,
          promotion,
          demoPortal,
          productTraining,
          salesTraining,
          infoSource,
          comment: comment.replace(/\n/g, "<br/>"),
          partnerReqType,
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    if (spam) {
      const resSubscr = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/sendsubscription`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: "",
            email: email,
            type: "Common",
            locale,
          }),
        },
      );
      const data = await resSubscr.json();

      if (data.status !== "success") {
        console.error(
          "Partnership request sendsubscription returns errors:",
          data,
        );
        //TODO: add handler for 'no subscription' but successful admin sending
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
