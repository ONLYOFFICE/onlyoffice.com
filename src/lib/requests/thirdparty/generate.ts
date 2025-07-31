import { createAuthToken } from "@src/utils/createAuthToken";

interface IGenerateKey {
  email: string;
}

export const generateKey = async ({ email }: IGenerateKey) => {
  try {
    const res = await fetch(`${process.env.THIRDPARTY_DOMAIN}/key/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("Generate key error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
