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
  try {
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

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("Register error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
