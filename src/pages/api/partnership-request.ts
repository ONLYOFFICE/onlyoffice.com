import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { addLandingRequest } from "@src/lib/requests/addLandingRequest";
import { emailTransporter } from "@src/config/email/transporter";
import { DownloadDocsEnterpriseEmail } from "@src/components/emails/DownloadDocsEnterpriseEmail";
import { DownloadDocSpaceEnterpriseEmail } from "@src/components/emails/DownloadDocSpaceEnterpriseEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    locale,
    type,
    referer,
    fullName,
    email,
    phone,
    companyName,
    website,
    comment,
    buttonId,
    from,
    country,
    region,
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

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
    console.log('~ ~ ~ Sending email to:', process.env.SALES_EMAIL);
    console.log('~ ~ ~ type:', type);
    await transporter.sendMail({
      from,
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${companyName} partn-req - ${
        type === "docsenterprisedownloadrequest"
          ? "Docs Enterprise Download Request"
          : type === "docspaceenterprisedownloadrequest"
            ? "DocSpace Enterprise Download Request"
            : ""
      } ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}[from: ${from}]`,
      html:
        type === "docsenterprisedownloadrequest"
          ? DownloadDocsEnterpriseEmail({
              firstName: fullName,
              lastName: "",
              email,
              phone,
              companyName,
              website,
              comment,
              buttonId,
              position: "",
              operatingSystem: "",
              communicationLanguage: "",
              companySize: "",
              firstHeard: "",
              language: locale,
              platform: "",
              errorText: errorMessages.join("<br/><br/>"),
            })
          : type === "docspaceenterprisedownloadrequest"
            ? DownloadDocSpaceEnterpriseEmail({
                fullName,
                email,
                phone,
                companyName,
                website,
                comment,
                buttonId,
                language: locale,
                errorText: errorMessages.join("<br/><br/>"),
              })
            : "",
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Download api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
