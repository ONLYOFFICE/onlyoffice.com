import { db } from "@src/config/db/site";

interface IAddDocsRegistrationRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  tariff_plan: string;
  platform: string;
  ip: string | string[] | null;
  lang: string;
  create_on: Date;
  spam: number;
  calls: number;
}

export const addDocsRegistrationRequest = async ({
  first_name,
  last_name,
  email,
  phone,
  tariff_plan,
  platform,
  ip,
  lang,
  create_on,
  spam,
  calls,
}: IAddDocsRegistrationRequest) => {
  try {
    await db.teamlabsite.query("INSERT INTO docs_registration_request SET ?", {
      first_name,
      last_name,
      email,
      phone,
      tariff_plan,
      platform,
      ip,
      lang,
      create_on,
      spam,
      calls,
    });

    return {
      status: "success",
      message: "docsRegistrationRequestAdded",
    };
  } catch (error: unknown) {
    console.error(
      "Add Docs Registration api returns errors:",
      error instanceof Error ? error.message : error,
    );

    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
