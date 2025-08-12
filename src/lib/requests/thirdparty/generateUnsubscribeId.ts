import { createAuthToken } from "@src/utils/createAuthToken";

interface IGenerateUnsubscribeId {
  email: string;
}

export const generateUnsubscribeId = async ({
  email,
}: IGenerateUnsubscribeId) => {
  try {
    const res = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/key/generateunsubscribeid`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ Email: email }),
      },
    );

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("generateUnsubscribeId error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
