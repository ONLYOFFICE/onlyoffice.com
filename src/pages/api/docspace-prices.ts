import { NextApiRequest, NextApiResponse } from "next";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { parse } from "cookie";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { DocSpacePricesEmail } from "@src/components/emails/DocSpacePricesEmail";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IEnterpriseModalFormData } from "@src/components/templates/DocSpacePrices/sections/Hero/sub-components/EnterpriseModal";

interface IAddDocSpaceEnterpriseData {
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

interface IPipedriveData {
  fullName: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  companyName: IQuoteModalFormData["companyName"];
  usersNumber: IEnterpriseModalFormData["usersNumber"];
  licenseDuration: IEnterpriseModalFormData["licenseDuration"];
  supportAndUpdates: IEnterpriseModalFormData["supportAndUpdates"];
  supportLevel: IEnterpriseModalFormData["supportLevel"];
  multiServerDeployment: boolean;
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

  const {
    locale,
    referer,
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
    country,
    region,
    hCaptchaResponse,
    affiliateId,
    affiliateToken,
    type,
  } = req.body;

  try {
    const ip =
      (Array.isArray(req.headers["x-forwarded-for"])
        ? req.headers["x-forwarded-for"][0]
        : req.headers["x-forwarded-for"]
      )?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "errorHCaptchaInvalid",
          error: hCaptchaResult.error,
        });
      }
    }

    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");
    const isSelected = (value: boolean) =>
      value ? "Selected" : "Not selected";

    if (referer) {
      const addDocSpaceEnterpriseRequest = async () => {
        try {
          const addDocSpaceEnterpriseData: IAddDocSpaceEnterpriseData = {
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
            ip,
            fromPage: from,
            utm_source: cookies.utmSource ?? null,
            utm_campaign: cookies.utmCampaign ?? null,
            utm_content: cookies.utmContent ?? null,
            utm_term: cookies.utmTerm ?? null,
            create_on: new Date(),
          };

          await db.teamlabsite.query(
            "INSERT INTO docspace_enterprise_request SET ?",
            [addDocSpaceEnterpriseData],
          );

          return {
            status: "success",
            message: "docspaceEnterpriseRequestSuccessful",
          };
        } catch (error: unknown) {
          console.error(
            "Add Docspace Enterprrise api returns errors:",
            error instanceof Error ? error.message : error,
          );

          return {
            status: "error",
            message:
              error instanceof Error ? error.message : "Unknown error occurred",
          };
        }
      };

      const addDocSpaceEnterpriseResult = await addDocSpaceEnterpriseRequest();
      if (addDocSpaceEnterpriseResult.status === "error") {
        errorMessages.push(
          `docspaceenterpriserequest: ${addDocSpaceEnterpriseResult.message}`,
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
          usersNumber,
          licenseDuration,
          supportAndUpdates,
          supportLevel,
          multiServerDeployment,
          trainingCourses,
          from,
          type,
          langOfPage: locale,
          ...(cookies.utmSource && { utmSource: cookies.utm_source }),
          ...(cookies.utmCampaign && { utmCampaig: cookies.utm_campaign }),
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
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - DocSpace Developer prices Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: DocSpacePricesEmail({
        fullName,
        email,
        phone,
        companyName,
        usersNumber,
        licenseDuration,
        supportAndUpdates,
        supportLevel,
        multiServerDeployment: isSelected(multiServerDeployment),
        trainingCourses: isSelected(trainingCourses),
        language: locale,
        affiliateId: affiliateId || "",
        affiliateToken: affiliateToken || "",
        errorText: errorMessages.join("<br/><br/>"),
      }),
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("DocSpace prices api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
