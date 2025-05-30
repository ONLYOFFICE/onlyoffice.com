import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDocsEnterprisePricesFormData } from "@src/components/templates/DocsEnterprisePrices/sections/Hero";

interface IDocsEnterprisePricesData {
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
    connectionsNumber,
    licenseDuration,
    supportAndUpdates,
    cloudType,
    supportLevel,
    trainingCourses,
    disasterRecovery,
    multiTenancy,
    from,
    utmSource,
    utmCampaign,
    utmContent,
    utmTerm,
  } = req.body;

  try {
    const dataToInsert: IDocsEnterprisePricesData = {
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
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      fromPage: from,
      utm_source: utmSource ?? null,
      utm_campaign: utmCampaign ?? null,
      utm_content: utmContent ?? null,
      utm_term: utmTerm ?? null,
      create_on: new Date(),
    };

    await db.query("INSERT INTO docs_enterprise_request SET ?", [dataToInsert]);

    res
      .status(200)
      .json({ status: "success", message: "docsEnterpriseRequestSuccessful" });
  } catch (error) {
    console.error("Error in Docs Enterprise prices API handler:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
