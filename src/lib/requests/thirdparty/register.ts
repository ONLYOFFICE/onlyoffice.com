import { createAuthToken } from "@src/utils/createAuthToken";

interface IRegister {
  email?: string;
  ip: string | string[] | null;
  language?: string | string[];
  awsRegion?: string | string[];
  spam?: string | string[];
  partnerId?: string | string[];
  affiliateId?: string | string[];
  campaign?: string | string[];
  thirdPartyProfile?: string | string[];
}

export const register = async ({
  email,
  ip,
  language,
  awsRegion,
  spam,
  partnerId,
  affiliateId,
  campaign,
  thirdPartyProfile,
}: IRegister) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
  };

  if (ip) headers["X-Forwarded-For"] = Array.isArray(ip) ? ip.join(", ") : ip;

  const res = await fetch(
    `${process.env.DOCSPACE_REGISTRATION_API}.${process.env.DOCSPACE_DOMAIN!.split(".").pop()}/apisystem/portal/registerbyemail`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        language,
        awsRegion,
        spam: spam === "true",
        calls: true,
        partnerId,
        affiliateId,
        campaign,
        thirdPartyProfile,
      }),
    },
  );

  if (!res.ok) {
    return {
      status: res.status,
      message: res.statusText,
    };
  }

  const data = await res.json();

  return { status: res.status, data };
};
