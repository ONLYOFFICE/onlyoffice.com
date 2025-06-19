import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDeveloperEditionPricesFormData } from "@src/components/templates/DeveloperEditionPrices/sections/Hero";

interface IDeveloperEditionPricesData {
  full_name: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  company_name: IQuoteModalFormData["companyName"];
  hosting: IDeveloperEditionPricesFormData["hosting"];
  development: string;
  dev_servers_number: IDeveloperEditionPricesFormData["devServersNumber"];
  production: string;
  prod_server_number: IDeveloperEditionPricesFormData["prodServerNumber"];
  connections_number: IDeveloperEditionPricesFormData["connectionsNumber"];
  non_production: string;
  non_prod_server_number: IDeveloperEditionPricesFormData["nonProdServerNumber"];
  support_level: IDeveloperEditionPricesFormData["supportLevel"];
  branding: IDeveloperEditionPricesFormData["branding"];
  access_to_api: string;
  multi_tenancy: string;
  disaster_recovery: string;
  multi_server_deployment: string;
  live_viewer: string;
  native_mobile_apps: string;
  desktop_apps: string;
  training_courses: string;
  from_page_part: string;
  ip: string | string[] | null;
  fromPage: string;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  create_on: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    fullName,
    email,
    phone,
    companyName,
    hosting,
    development,
    devServerNumber,
    production,
    prodServerNumber,
    connectionsNumber,
    nonProduction,
    nonProdServerNumber,
    supportLevel,
    branding,
    multiTenancy,
    disasterRecovery,
    multiServerDeployment,
    accessToAPI,
    liveViewer,
    nativeMobileApps,
    desktopApps,
    trainingCourses,
    devPricesPart,
    from,
    utmSource,
    utmCampaign,
    utmContent,
    utmTerm,
  } = req.body;

  try {
    const dataToInsert: IDeveloperEditionPricesData = {
      full_name: fullName,
      email,
      phone,
      company_name: companyName,
      hosting,
      development: String(development),
      dev_servers_number: String(devServerNumber),
      production: String(production),
      prod_server_number: prodServerNumber,
      connections_number: connectionsNumber,
      non_production: String(nonProduction),
      non_prod_server_number: nonProdServerNumber,
      support_level: supportLevel,
      branding,
      access_to_api: String(accessToAPI),
      multi_tenancy: String(multiTenancy),
      disaster_recovery: String(disasterRecovery),
      multi_server_deployment: String(multiServerDeployment),
      live_viewer: String(liveViewer),
      native_mobile_apps: String(nativeMobileApps),
      desktop_apps: String(desktopApps),
      training_courses: String(trainingCourses),
      from_page_part: devPricesPart,
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      fromPage: from,
      utm_source: utmSource ?? null,
      utm_campaign: utmCampaign ?? null,
      utm_content: utmContent ?? null,
      utm_term: utmTerm ?? null,
      create_on: new Date(),
    };

    await db.query("INSERT INTO docs_developer_request SET ?", [dataToInsert]);

    res
      .status(200)
      .json({ status: "success", message: "docsDeveloperRequestSuccessful" });
  } catch (error) {
    console.error("Error in Developer Edition prices API handler:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
