import { NextApiRequest, NextApiResponse } from "next";
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
  development: string;
  devServersNumber: IDocSpaceDeveloperPricesFormData["devServersNumber"];
  production: string;
  prodServerNumber: IDocSpaceDeveloperPricesFormData["prodServerNumber"];
  connectionsNumber: IDocSpaceDeveloperPricesFormData["connectionsNumber"];
  supportLevel: IDocSpaceDeveloperPricesFormData["supportLevel"];
  branding: IDocSpaceDeveloperPricesFormData["branding"];
  multiTenancy: string;
  disasterRecovery: string;
  multiServerDeployment: string;
  nativeMobileApps: string;
  desktopApps: string;
  trainingCourses: string;
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
      const addDocSpaceDeveloperRequest = async () => {
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

          await db.query("INSERT INTO docspace_developer_request SET ?", [
            addDocSpaceDeveloperData,
          ]);

          return {
            status: "success",
            message: "docSpaceDeveloperRequestSuccessful",
          };
        } catch (error: unknown) {
          console.error(
            "Add DocSpace developer prices api returns errors:",
            error instanceof Error ? error.message : error,
          );

          return {
            status: "error",
            message:
              error instanceof Error ? error.message : "Unknown error occurred",
          };
        }
      };

      const addDocSpaceDeveloperResult = await addDocSpaceDeveloperRequest();
      if (addDocSpaceDeveloperResult.status === "error") {
        errorMessages.push(
          `docspacedeveloperrequest: ${addDocSpaceDeveloperResult.message}`,
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
      to: [process.env.NEXT_PUBLIC_SALES_EMAIL!],
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

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("DocSpace Developer prices api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
