import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { parse } from "cookie";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { DocsEnterprisePricesCloudEmail } from "@src/components/emails/DocsEnterprisePricesCloudEmail";
import { DocsEnterprisePricesOnPremisesEmail } from "@src/components/emails/DocsEnterprisePricesOnPremisesEmail";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDocsEnterprisePricesFormData } from "@src/components/templates/DocsEnterprisePrices/sections/Hero";

interface IAddDocsEnterpriseData {
  full_name: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  company_name: IQuoteModalFormData["companyName"];
  hosting: IDocsEnterprisePricesFormData["hosting"];
  cloud_type: IDocsEnterprisePricesFormData["cloudType"];
  connections_number: IDocsEnterprisePricesFormData["connectionsNumber"];
  support_level: IDocsEnterprisePricesFormData["supportLevel"];
  license_duration: IDocsEnterprisePricesFormData["licenseDuration"];
  support_updates: IDocsEnterprisePricesFormData["supportAndUpdates"];
  disaster_recovery: string;
  multi_server_deployment: string;
  training_courses: string;
  ip: string | string[] | null;
  fromPage: string;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  create_on: Date;
}

interface IPipedriveData {
  fullName: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  companyName: IQuoteModalFormData["companyName"];
  hosting: IDocsEnterprisePricesFormData["hosting"];
  connectionsNumber: IDocsEnterprisePricesFormData["connectionsNumber"];
  licenseDuration: IDocsEnterprisePricesFormData["licenseDuration"];
  supportAndUpdates: IDocsEnterprisePricesFormData["supportAndUpdates"];
  cloudType: IDocsEnterprisePricesFormData["cloudType"];
  supportLevel: IDocsEnterprisePricesFormData["supportLevel"];
  trainingCourses: boolean;
  disasterRecovery: boolean;
  multiTenancy: boolean;
  from: string;
  type: string;
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
    fullName,
    email,
    phone,
    companyName,
    hosting,
    connectionsNumber,
    licenseDuration,
    supportAndUpdates,
    cloudType,
    supportLevel,
    trainingCourses,
    disasterRecovery,
    multiTenancy,
    from,
    country,
    region,
    affiliateId,
    affiliateToken,
    type,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !locale ||
      typeof locale !== "string" ||
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !phone ||
      typeof phone !== "string" ||
      !companyName ||
      typeof companyName !== "string" ||
      (hosting !== "Cloud" && hosting !== "On-premises") ||
      (connectionsNumber !== "50" &&
        connectionsNumber !== "100" &&
        connectionsNumber !== "200" &&
        connectionsNumber !== "more") ||
      (licenseDuration !== "1-year" && licenseDuration !== "Lifetime") ||
      (supportAndUpdates !== "1-year" && supportAndUpdates !== "3-year") ||
      (cloudType !== "Business" && cloudType !== "VIP") ||
      (supportLevel !== "Basic" &&
        supportLevel !== "Plus" &&
        supportLevel !== "Premium") ||
      typeof trainingCourses !== "boolean" ||
      typeof disasterRecovery !== "boolean" ||
      typeof multiTenancy !== "boolean" ||
      typeof from !== "string" ||
      typeof country !== "string" ||
      typeof region !== "string" ||
      typeof affiliateId !== "string" ||
      typeof affiliateToken !== "string" ||
      !type ||
      typeof type !== "string" ||
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
    const isSelected = (value: boolean) =>
      value ? "Selected" : "Not selected";

    if (req.headers.referer) {
      try {
        const addDocsEnterpriseData: IAddDocsEnterpriseData = {
          full_name: fullName,
          email,
          phone,
          company_name: companyName,
          hosting,
          cloud_type: cloudType,
          connections_number: connectionsNumber,
          support_level: supportLevel,
          license_duration: licenseDuration,
          support_updates: supportAndUpdates,
          disaster_recovery: String(disasterRecovery),
          multi_server_deployment: String(multiTenancy),
          training_courses: String(trainingCourses),
          ip,
          fromPage: from,
          utm_source: cookies.utmSource ?? null,
          utm_campaign: cookies.utmCampaign ?? null,
          utm_content: cookies.utmContent ?? null,
          utm_term: cookies.utmTerm ?? null,
          create_on: new Date(),
        };

        await db.teamlabsite.query(
          "INSERT INTO docs_enterprise_request SET ?",
          [addDocsEnterpriseData],
        );
      } catch (error) {
        logError((req.url || "").split("?")[0], "DB", error);
        errorMessages.push(
          `DB: ${error instanceof Error ? error.message : error}`,
        );
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }

    try {
      const pipedriveData: IPipedriveData = {
        fullName,
        email,
        phone,
        companyName,
        hosting,
        connectionsNumber,
        licenseDuration,
        supportAndUpdates,
        cloudType,
        supportLevel,
        trainingCourses,
        disasterRecovery,
        multiTenancy,
        from,
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
            title: `dspp DocSpace Enterprise - ${country} - ${email} - ${region}`,
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
        subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - Docs Enterprise Request (${hosting}) ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
        html:
          hosting === "Cloud"
            ? DocsEnterprisePricesCloudEmail({
                fullName,
                email,
                phone,
                companyName,
                cloudType,
                supportLevel,
                trainingCourses: isSelected(trainingCourses),
                language: locale,
                affiliateId: affiliateId || "",
                affiliateToken: affiliateToken || "",
                errorText: errorMessages.join("<br/><br/>"),
              })
            : hosting === "On-premises"
              ? DocsEnterprisePricesOnPremisesEmail({
                  fullName,
                  email,
                  phone,
                  companyName,
                  connectionsNumber,
                  licenseDuration,
                  supportAndUpdates,
                  supportLevel,
                  trainingCourses: isSelected(trainingCourses),
                  disasterRecovery: isSelected(disasterRecovery),
                  multiTenancy: isSelected(multiTenancy),
                  language: locale,
                  affiliateId: affiliateId || "",
                  affiliateToken: affiliateToken || "",
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
