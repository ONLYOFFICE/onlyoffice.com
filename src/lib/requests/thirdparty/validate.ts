import { createAuthToken } from "@src/utils/createAuthToken";

interface IValidateKeys {
  epkey: string | string[];
  eskey: string | string[];
  page: string;
}

export const validateKeys = async ({ epkey, eskey, page }: IValidateKeys) => {
  try {
    const res = await fetch(`${process.env.THIRDPARTY_DOMAIN}/key/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
      },
      body: JSON.stringify({
        emailKey: epkey,
        linkKey: eskey,
        page,
      }),
    });

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("Validate keys error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
