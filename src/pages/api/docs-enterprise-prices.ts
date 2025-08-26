import { NextApiRequest, NextApiResponse } from "next";
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
  trainingCourses: string;
  disasterRecovery: string;
  multiTenancy: string;
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

  const {
    locale,
    referer,
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
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");
    const isSelected = (value: boolean) =>
      value ? "Selected" : "Not selected";

    if (referer) {
      const addDocsEnterpriseRequest = async () => {
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
            ip:
              req.headers["x-forwarded-for"] ||
              req.socket.remoteAddress ||
              null,
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

          return {
            status: "success",
            message: "docsEnterpriseRequestSuccessful",
          };
        } catch (error: unknown) {
          console.error(
            "Insert Docs Enterprise prices api returns errors:",
            error instanceof Error ? error.message : error,
          );

          return {
            status: "error",
            message:
              error instanceof Error ? error.message : "Unknown error occurred",
          };
        }
      };

      const addDocsEnterpriseResult = await addDocsEnterpriseRequest();
      if (addDocsEnterpriseResult.status === "error") {
        errorMessages.push(
          `docsenterpriserequest: ${addDocsEnterpriseResult.message}`,
        );
      }
    }

    const pipedriveRequest = async () => {
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

        return {
          status: "success",
          message: "postApiPipedriveRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Pipedrive api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const pipedriveResult = await pipedriveRequest();
    if (pipedriveResult.status === "error") {
      errorMessages.push(`postApiPipedriveRequest: ${pipedriveResult.message}`);
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
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

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Docs Enterprise prices api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
