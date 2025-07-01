import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { DeveloperEditionPricesCloudEmail } from "@src/components/emails/DeveloperEditionPricesCloudEmail";
import { DeveloperEditionPricesOnPremisesEmail } from "@src/components/emails/DeveloperEditionPricesOnPremisesEmail";
import { IQuoteModalFormData } from "@src/components/widgets/pricing/QuoteModal";
import { IDeveloperEditionPricesFormData } from "@src/components/templates/DeveloperEditionPrices/sections/Hero";

interface IAddDocsDeveloperData {
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

interface IPipedriveData {
  fullName: IQuoteModalFormData["fullName"];
  email: IQuoteModalFormData["email"];
  phone: IQuoteModalFormData["phone"];
  companyName: IQuoteModalFormData["companyName"];
  hosting: IDeveloperEditionPricesFormData["hosting"];
  development: string;
  devServersNumber: IDeveloperEditionPricesFormData["devServersNumber"];
  production: string;
  prodServerNumber: IDeveloperEditionPricesFormData["prodServerNumber"];
  connectionsNumber: IDeveloperEditionPricesFormData["connectionsNumber"];
  nonProduction: string;
  nonProdServerNumber: IDeveloperEditionPricesFormData["nonProdServerNumber"];
  supportLevel: IDeveloperEditionPricesFormData["supportLevel"];
  branding: IDeveloperEditionPricesFormData["branding"];
  multiTenancy: string;
  disasterRecovery: string;
  multiServerDeployment: string;
  accessToAPI: string;
  liveViewer: string;
  nativeMobileApps: string;
  desktopApps: string;
  trainingCourses: string;
  from: string;
  devPricesPart: string;
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
    development,
    devServersNumber,
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
    country,
    region,
    affiliateId,
    affiliateToken,
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");
    const isSelected = (value: boolean) =>
      value ? "Selected" : "Not selected";

    if (referer) {
      const addDocsDeveloperRequest = async () => {
        try {
          const addDocsDeveloperData: IAddDocsDeveloperData = {
            full_name: fullName,
            email,
            phone,
            company_name: companyName,
            hosting,
            development: String(development),
            dev_servers_number: String(devServersNumber),
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

          await db.query("INSERT INTO docs_developer_request SET ?", [
            addDocsDeveloperData,
          ]);

          return {
            status: "success",
            message: "docsDeveloperRequestSuccessful",
          };
        } catch (error: unknown) {
          console.error(
            "Add Docs developer api returns errors:",
            error instanceof Error ? error.message : error,
          );

          return {
            status: "error",
            message:
              error instanceof Error ? error.message : "Unknown error occurred",
          };
        }
      };

      const addDocsDeveloperResult = await addDocsDeveloperRequest();
      if (addDocsDeveloperResult.status === "error") {
        errorMessages.push(
          `docsdeveloperrequest: ${addDocsDeveloperResult.message}`,
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
          development,
          devServersNumber,
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
          from,
          devPricesPart,
          type: "docspaceenterpriserequest",
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
      subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - Docs Developer Request (${hosting}) ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html:
        hosting === "Cloud"
          ? DeveloperEditionPricesCloudEmail({
              fullName,
              email,
              phone,
              companyName,
              supportLevel,
              accessToAPI: isSelected(accessToAPI),
              liveViewer: isSelected(liveViewer),
              nativeMobileApps: isSelected(nativeMobileApps),
              desktopApps: isSelected(desktopApps),
              trainingCourses: isSelected(trainingCourses),
              language: locale,
              affiliateId: affiliateId || "",
              affiliateToken: affiliateToken || "",
              errorText: errorMessages.join("<br/><br/>"),
            })
          : hosting === "On-premises"
            ? DeveloperEditionPricesOnPremisesEmail({
                fullName,
                email,
                phone,
                companyName,
                development: isSelected(development),
                devServersNumber,
                production: isSelected(production),
                prodServerNumber,
                connectionsNumber,
                nonProduction: isSelected(nonProduction),
                nonProdServerNumber,
                branding,
                multiTenancy: isSelected(multiTenancy),
                disasterRecovery: isSelected(disasterRecovery),
                multiServerDeployment: isSelected(multiServerDeployment),
                supportLevel,
                accessToAPI: isSelected(accessToAPI),
                liveViewer: isSelected(liveViewer),
                nativeMobileApps: isSelected(nativeMobileApps),
                desktopApps: isSelected(desktopApps),
                trainingCourses: isSelected(trainingCourses),
                language: locale,
                affiliateId: affiliateId || "",
                affiliateToken: affiliateToken || "",
                errorText: errorMessages.join("<br/><br/>"),
              })
            : "",
    });

    res.status(200).json({ status: "success", message: "success" });
  } catch (error) {
    console.error("Developer Edition prices api returns errors:", error);
    res.status(500).json({ status: "error", message: error });
  }
}
