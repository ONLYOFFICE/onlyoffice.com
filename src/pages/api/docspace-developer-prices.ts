import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDocSpaceDeveloperPricesFormData } from "@src/components/templates/DocSpaceDeveloperPrices/sections/Hero";

interface IDocSpaceDeveloperPricessData {
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
    development,
    devServerNumber,
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
    utmSource,
    utmCampaign,
    utmContent,
    utmTerm,
  } = req.body;

  try {
    const dataToInsert: IDocSpaceDeveloperPricessData = {
      full_name: fullName,
      email,
      phone,
      company_name: companyName,
      development: String(development),
      dev_servers_number: devServerNumber,
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
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      fromPage: from,
      utm_source: utmSource ?? null,
      utm_campaign: utmCampaign ?? null,
      utm_content: utmContent ?? null,
      utm_term: utmTerm ?? null,
      create_on: new Date(),
    };

    await db.query("INSERT INTO docspace_developer_request SET ?", [
      dataToInsert,
    ]);

    res.status(200).json({
      status: "success",
      message: "docSpaceDeveloperRequestSuccessful",
    });
  } catch (error) {
    console.error("Error in DocSpace Developer prices API handler:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
