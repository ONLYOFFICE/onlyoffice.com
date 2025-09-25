import { createAuthToken } from "@src/utils/createAuthToken";

const request = async (endpoint: string, body: Record<string, unknown>) => {
  const res = await fetch(`${process.env.THIRDPARTY_DOMAIN}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return {
      status: res.status,
      message: res.statusText,
    };
  }

  const data = await res.json();

  return { status: res.status, data };
};

export const findByEmail = ({ email }: { email: string }) =>
  request("/multiregion/findbyemail", { email });

export const findByEmailPassword = ({
  email,
  passwordHash,
}: {
  email: string;
  passwordHash: string;
}) => request("/multiregion/findbyemailpassword", { email, passwordHash });

export const findBySocial = ({ transport }: { transport: string }) =>
  request("/multiregion/findbysocial", { transport });

export const generateKey = ({ email }: { email: string }) =>
  request("/key/generate", { email });

export const generateUnsubscribeId = ({ email }: { email: string }) =>
  request("/key/generateunsubscribeid", { email });

export const resetPassword = ({ email }: { email: string }) =>
  request("/multiregion/resetpassword", { email });

export const sendEmail = ({
  email,
  Subject,
  Body,
}: {
  email: string;
  Subject: string;
  Body: string;
}) => request("/email/send", { email, Subject, Body });

export const validateKeys = ({
  emailKey,
  linkKey,
  page,
}: {
  emailKey: string | string[];
  linkKey: string | string[];
  page: string;
}) => request("/key/validate", { emailKey, linkKey, page });

export const validateUnsubscribeId = ({
  UnsubscribeId,
}: {
  UnsubscribeId: string;
}) => request("/key/validateunsubscribeid", { UnsubscribeId });
