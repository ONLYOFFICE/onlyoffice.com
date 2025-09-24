import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { parse } from "cookie";
import { getDisplayNameWithoutParentheses } from "@src/utils/getDisplayNameWithoutParentheses";
import { addLandingRequest } from "@src/lib/requests/addLandingRequest";
import { emailTransporter } from "@src/config/email/transporter";
import { DownloadDocsDeveloperEmail } from "@src/components/emails/DownloadDocsDeveloperEmail";
import { DownloadDocSpaceDeveloperEmail } from "@src/components/emails/DownloadDocSpaceDeveloperEmail";
import { IDownloadModalData } from "@src/components/widgets/download/DownloadModal";

interface IWebPaymentData {
  FName: IDownloadModalData["fullName"];
  Email: IDownloadModalData["email"];
  Phone: IDownloadModalData["phone"];
  CompanyName: IDownloadModalData["companyName"];
  Host: IDownloadModalData["website"];
  Comments: IDownloadModalData["comment"];
  ButtonId: IDownloadModalData["buttonId"];
  LanguageCode: string;
  Language: string;
}

interface IPipedriveData {
  firstName: IDownloadModalData["fullName"];
  email: IDownloadModalData["email"];
  phone: IDownloadModalData["phone"];
  companyName: IDownloadModalData["companyName"];
  website?: IDownloadModalData["website"];
  from: string;
  buttonId: IDownloadModalData["buttonId"];
  type: IDownloadModalData["type"];
  langOfPage: string;
  utmSource?: string;
  utmCampaig?: string;
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
    locale,
    type,
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
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !locale ||
      typeof locale !== "string" ||
      !type ||
      typeof type !== "string" ||
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !phone ||
      typeof phone !== "string" ||
      !companyName ||
      typeof companyName !== "string" ||
      typeof website !== "string" ||
      typeof comment !== "string" ||
      !buttonId ||
      typeof buttonId !== "string" ||
      typeof from !== "string" ||
      typeof country !== "string" ||
      typeof region !== "string" ||
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

    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    try {
      const webPaymentData: IWebPaymentData = {
        FName: fullName,
        Email: email,
        Phone: phone,
        CompanyName: companyName,
        Host: website,
        Comments: comment,
        ButtonId: buttonId,
        LanguageCode: getDisplayNameWithoutParentheses(locale),
        Language: locale,
      };

      await fetch(
        type === "docsdeveloperdownloadrequest"
          ? process.env.WEB_PAYMENT_DD_TRIAL_URL!
          : type === "docspacedeveloperdownloadrequest"
            ? process.env.WEB_PAYMENT_DSPD_TRIAL_URL!
            : "",
        {
          method: "POST",
          body: new URLSearchParams(Object.entries(webPaymentData)),
        },
      );
    } catch (error) {
      logError((req.url || "").split("?")[0], "Web Payment", error);
      errorMessages.push(
        `Web Payment: ${error instanceof Error ? error.message : error}`,
      );
    }

    if (req.headers.referer) {
      try {
        await addLandingRequest({
          first_name: fullName,
          last_name: "",
          email,
          phone,
          operating_system: null,
          company_name: companyName,
          company_size: null,
          position: null,
          ip,
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
      } catch (error) {
        logError((req.url || "").split("?")[0], "Landing", error);
        errorMessages.push(
          `Landing: ${error instanceof Error ? error.message : error}`,
        );
      }
    }

    try {
      const pipedriveData: IPipedriveData = {
        firstName: fullName,
        email,
        phone,
        companyName,
        ...(website && { website }),
        from,
        buttonId,
        type,
        langOfPage: locale,
        ...(cookies.utmSource && { utmSource: cookies.utm_source }),
        ...(cookies.utmCampaign && {
          utmCampaig: cookies.utm_campaign,
        }),
      };

      await fetch(
        `${process.env.PIPEDRIVE_API_URL}${process.env.PIPEDRIVE_API_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.PIPEDRIVE_API_TOKEN}`,
            Accept: "application/json",
          },
          body: JSON.stringify({
            owner_id: 12769244,
            person_id: 131,
            visible_to: "3",
            "08f603bf9e0032d5a9f9e5cd39ca8c7a4374ac82": cookies._ga,
            was_seen: false,
            title: `dwndev ${type === "docsdeveloperdownloadrequest" ? "Docs Developer" : type === "docspacedeveloperdownloadrequest" ? "DocSpace Developer" : ""} - ${country} - ${email} - ${region}`,
            "6654a8f8686bdba60bbcdf6e69313c150f40b088":
              JSON.stringify(pipedriveData),
          }),
        },
      );
    } catch (error) {
      logError((req.url || "").split("?")[0], "Pipedrive", error);
      errorMessages.push(
        `Pipedrive: ${error instanceof Error ? error.message : error}`,
      );
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SALES_EMAIL!],
        subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - ${
          type === "docsdeveloperdownloadrequest"
            ? "Docs Developer Download Request"
            : type === "docspacedeveloperdownloadrequest"
              ? "DocSpace Developer Download Request"
              : ""
        } ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}[from: ${from}]`,
        html:
          type === "docsdeveloperdownloadrequest"
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
            : type === "docspacedeveloperdownloadrequest"
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
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
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
