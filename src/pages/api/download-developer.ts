import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { getDisplayNameWithoutParentheses } from "@src/utils/getDisplayNameWithoutParentheses";
import { addLandingRequest } from "@src/lib/requests/addLandingRequest";
import { pipedriveRequest } from "@src/lib/requests/pipedriveRequest";
import { emailTransporter } from "@src/config/email/transporter";
import { DownloadDocsDeveloperEmail } from "@src/components/emails/DownloadDocsDeveloperEmail";
import { DownloadDocSpaceDeveloperEmail } from "@src/components/emails/DownloadDocSpaceDeveloperEmail";

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

    const webPaymentResponse = await fetch(
      type === "docsDeveloperDownloadRequest"
        ? process.env.WEB_PAYMENT_DD_TRIAL_URL!
        : type === "docSpaceDeveloperDownloadRequest"
          ? process.env.WEB_PAYMENT_DSPD_TRIAL_URL!
          : "",
      {
        method: "POST",
        body: new URLSearchParams({
          FName: fullName,
          Email: email,
          Phone: phone,
          CompanyName: companyName,
          Host: website,
          Comments: comment,
          ButtonId: buttonId,
          LanguageCode: getDisplayNameWithoutParentheses(locale),
          Language: locale,
        }),
      },
    );

    const webPaymentData = await webPaymentResponse.json();
    if (!webPaymentResponse.ok) {
      console.error(
        "Web Payment Trial returns errors:",
        webPaymentData?.Message,
      );
      errorMessages.push(`web-payment-trial: ${webPaymentData?.Message}`);
    }

    if (referer) {
      const addLandingData = await addLandingRequest({
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

      if (addLandingData?.status === "error") {
        errorMessages.push(`add-landing: ${addLandingData?.message}`);
      }
    }

    const pipedriveData = await pipedriveRequest({
      _ga: cookies._ga!,
      title: `dwndev ${type === "docsDeveloperDownloadRequest" ? "Docs Developer" : type === "docSpaceDeveloperDownloadRequest" ? "DocSpace Developer" : ""} - ${country} - ${email} - ${region}`,
      firstName: fullName,
      email,
      phone,
      companyName,
      website,
      from,
      buttonId,
      type,
      langOfPage: locale,
      utmSource: cookies.utm_source,
      utmCampaign: cookies.utm_campaign,
    });

    if (pipedriveData?.status === "error") {
      errorMessages.push(`pipedrive: ${pipedriveData?.message}`);
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.NEXT_PUBLIC_SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - ${
        type === "docsDeveloperDownloadRequest"
          ? "Docs Developer Download Request"
          : type === "docSpaceDeveloperDownloadRequest"
            ? "DocSpace Developer Download Request"
            : ""
      } ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}[from: ${from}]`,
      html:
        type === "docsDeveloperDownloadRequest"
          ? DownloadDocsDeveloperEmail({
              firstName: fullName,
              lastName: "",
              email,
              phone,
              companyName,
              website,
              comment,
              buttonId,
              position: "",
              firstHeard: "",
              communicationLanguage: "",
              language: locale,
              errorText: errorMessages.join("<br/><br/>"),
            })
          : type === "docSpaceDeveloperDownloadRequest"
            ? DownloadDocSpaceDeveloperEmail({
                fullName: fullName,
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
    console.error("Download Developer api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
