import { NextApiRequest, NextApiResponse } from "next";
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
    from,
    spam,
    partnerReqType,
    hCaptchaResponse,
  } = req.body;

  let isMailOK = false;

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

    const cookies = parse(req.headers.cookie || "");

    if (!validateEmail(email)) {
      console.warn("Partnership request got invakid email=", email);
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email" });
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      to: [process.env.SALES_EMAIL!],
      subject: `${companyName} Partner Request ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}[from: ${from}]`,
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
        comment,
        partnerReqType,
      }),
    });

    isMailOK = true;

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
    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Partnership request api returns errors:", error, {
      isMailOK,
    });
    res
      .status(500)
      .json({ status: "error", message: (error as Error).message });
  }
}
