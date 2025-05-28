import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IEnterpriseModalFormData } from "@src/components/templates/DocSpacePrices/sections/Hero/sub-components/EnterpriseModal";

interface IDocSpacePricessData {
  full_name: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  company_name: IQuoteModalFormData["companyName"];
  users_number: IEnterpriseModalFormData["usersNumber"];
  license_duration: IEnterpriseModalFormData["licenseDuration"];
  support_updates: IEnterpriseModalFormData["supportAndUpdates"];
  support_level: IEnterpriseModalFormData["supportLevel"];
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
    usersNumber,
    licenseDuration,
    supportAndUpdates,
    supportLevel,
    multiServerDeployment,
    trainingCourses,
    from,
    utmSource,
    utmCampaign,
    utmContent,
    utmTerm,
  } = req.body;

  try {
    const dataToInsert: IDocSpacePricessData = {
      full_name: fullName,
      email,
      phone,
      company_name: companyName,
      users_number: usersNumber,
      license_duration: licenseDuration,
      support_updates: supportAndUpdates,
      support_level: supportLevel,
      multi_server_deployment: String(multiServerDeployment),
      training_courses: String(trainingCourses),
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      fromPage: from,
      utm_source: utmSource ?? null,
      utm_campaign: utmCampaign ?? null,
      utm_content: utmContent ?? null,
      utm_term: utmTerm ?? null,
      create_on: new Date(),
    };

    await db.query("INSERT INTO docspace_enterprise_request SET ?", [
      dataToInsert,
    ]);

    res.status(200).json({
      status: "success",
      message: "docspaceEnterpriseRequestSuccessful",
    });
  } catch (error) {
    console.error("Error in DocSpace prices API handler:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
