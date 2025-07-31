import { createAuthToken } from "@src/utils/createAuthToken";
interface ISendEmail {
  email: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ email, subject, body }: ISendEmail) => {
  try {
    const res = await fetch(`${process.env.THIRDPARTY_DOMAIN}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
      },
      body: JSON.stringify({
        email,
        Subject: subject,
        Body: body,
      }),
    });

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("Send email error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
