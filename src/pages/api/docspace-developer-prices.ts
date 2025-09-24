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
import { DocSpaceDeveloperPricesEmail } from "@src/components/emails/DocSpaceDeveloperPricesEmail";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDocSpaceDeveloperPricesFormData } from "@src/components/templates/DocSpaceDeveloperPrices/sections/Hero";

interface IAddDocSpaceDeveloperData {
  full_name: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  company_name: IQuoteModalFormData["companyName"];
  development: string;
  dev_servers_number: IDocSpaceDeveloperPricesFormData["devServersNumber"];
  production: string;
  prod_server_number: IDocSpaceDeveloperPricesFormData["prodServerNumber"];
  connections_number: IDocSpaceDeveloperPricesFormData["connectionsNumber"];
  support_level: IDocSpaceDeveloperPricesFormData["supportLevel"];
  branding: IDocSpaceDeveloperPricesFormData["branding"];
  multi_tenancy: string;
  disaster_recovery: string;
  multi_server_deployment: string;
  native_mobile_apps: string;
  desktop_apps: string;
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
  development: boolean;
  devServersNumber: IDocSpaceDeveloperPricesFormData["devServersNumber"];
  production: boolean;
  prodServerNumber: IDocSpaceDeveloperPricesFormData["prodServerNumber"];
  connectionsNumber: IDocSpaceDeveloperPricesFormData["connectionsNumber"];
  supportLevel: IDocSpaceDeveloperPricesFormData["supportLevel"];
  branding: IDocSpaceDeveloperPricesFormData["branding"];
  multiTenancy: boolean;
  disasterRecovery: boolean;
  multiServerDeployment: boolean;
  nativeMobileApps: boolean;
  desktopApps: boolean;
  trainingCourses: boolean;
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
    development,
    devServersNumber,
    production,
    prodServerNumber,
    connectionsNumber,
    supportLevel,
    branding,
    multiTenancy,
    disasterRecovery,
    multiServerDeployment,
    nativeMobileApps,
    desktopApps,
    trainingCourses,
    from,
    country,
    region,
    hCaptchaResponse,
    affiliateId,
    affiliateToken,
    type,
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
      typeof development !== "boolean" ||
      !devServersNumber ||
      typeof devServersNumber !== "string" ||
      typeof production !== "boolean" ||
      !prodServerNumber ||
      typeof prodServerNumber !== "string" ||
      !connectionsNumber ||
      typeof connectionsNumber !== "string" ||
      (supportLevel !== "Basic" &&
        supportLevel !== "Plus" &&
        supportLevel !== "Premium") ||
      (branding !== "Standard branding" && branding !== "White Label") ||
      typeof multiTenancy !== "boolean" ||
      typeof disasterRecovery !== "boolean" ||
      typeof multiServerDeployment !== "boolean" ||
      typeof nativeMobileApps !== "boolean" ||
      typeof desktopApps !== "boolean" ||
      typeof trainingCourses !== "boolean" ||
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
        const addDocSpaceDeveloperData: IAddDocSpaceDeveloperData = {
          full_name: fullName,
          email,
          phone,
          company_name: companyName,
          development: String(development),
          dev_servers_number: devServersNumber,
          production: String(production),
          prod_server_number: prodServerNumber,
          connections_number: connectionsNumber,
          support_level: supportLevel,
          branding,
          multi_tenancy: String(multiTenancy),
          disaster_recovery: String(disasterRecovery),
          multi_server_deployment: String(multiServerDeployment),
          native_mobile_apps: String(nativeMobileApps),
          desktop_apps: String(desktopApps),
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
          "INSERT INTO docspace_developer_request SET ?",
          [addDocSpaceDeveloperData],
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
        development,
        devServersNumber,
        production,
        prodServerNumber,
        connectionsNumber,
        supportLevel,
        branding,
        multiTenancy,
        disasterRecovery,
        multiServerDeployment,
        nativeMobileApps,
        desktopApps,
        trainingCourses,
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
            title: `devep Docs Developer - ${country} - ${email} - ${region}`,
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
        subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - DocSpace Developer prices Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
        html: DocSpaceDeveloperPricesEmail({
          fullName,
          email,
          phone,
          companyName,
          development: isSelected(development),
          devServersNumber,
          production: isSelected(production),
          prodServerNumber,
          connectionsNumber,
          supportLevel,
          branding,
          multiTenancy: isSelected(multiTenancy),
          disasterRecovery: isSelected(disasterRecovery),
          multiServerDeployment: isSelected(multiServerDeployment),
          nativeMobileApps: isSelected(nativeMobileApps),
          desktopApps: isSelected(desktopApps),
          trainingCourses: isSelected(trainingCourses),
          language: locale,
          affiliateId: affiliateId || "",
          affiliateToken: affiliateToken || "",
          errorText: errorMessages.join("<br/><br/>"),
        }),
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
