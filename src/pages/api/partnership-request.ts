import { NextApiRequest, NextApiResponse } from "next";
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
  } = req.body;

  try {
    const cookies = parse(req.headers.cookie || "");

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.PARTNERSHIP_REQUEST_EMAIL!],
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
      })
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Partnership request api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
