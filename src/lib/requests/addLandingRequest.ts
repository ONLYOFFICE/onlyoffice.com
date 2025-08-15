import { db } from "@src/config/db/site";

interface IAddLandingRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  operating_system: string | null;
  company_name: string;
  company_size: string | null;
  position: string | null;
  ip: string | string[] | null;
  fromPage: string;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  create_on: Date;
  spam: number;
  calls: number;
  ownerId: string | null;
  coupon: string | null;
  region: string | null;
  portal_id: string | null;
  source: string | null;
  choice_language: string;
  website: string;
}

export const addLandingRequest = async ({
  first_name,
  last_name,
  email,
  phone,
  operating_system,
  company_name,
  company_size,
  position,
  ip,
  fromPage,
  utm_source,
  utm_campaign,
  utm_content,
  utm_term,
  create_on,
  spam,
  calls,
  ownerId,
  coupon,
  region,
  portal_id,
  source,
  choice_language,
  website,
}: IAddLandingRequest) => {
  try {
    await db.teamlabsite.query("INSERT INTO form_registration_request SET ?", {
      first_name,
      last_name,
      email,
      phone,
      operating_system,
      company_name,
      company_size,
      position,
      ip,
      fromPage,
      utm_source,
      utm_campaign,
      utm_content,
      utm_term,
      create_on,
      spam,
      calls,
      ownerId,
      coupon,
      region,
      portal_id,
      source,
      choice_language,
      website,
    });

    return {
      status: "success",
      message: "formRegistrationRequestAdded",
    };
  } catch (error: unknown) {
    console.error(
      "Add Landing api returns errors:",
      error instanceof Error ? error.message : error,
    );

    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
