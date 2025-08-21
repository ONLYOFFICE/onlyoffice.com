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

    const raw = await res.text();
    let data: unknown = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error("generateUnsubscribeId: JSON parse error", e, { raw });
    }

    if (!res.ok) {
      console.error("generateUnsubscribeId: HTTP error", {
        status: res.status,
        statusText: res.statusText,
        raw,
      });
      return { status: "error", message: `Error: ${res.status} ${res.statusText}` };
    }

    if (!data) {
      console.error("generateUnsubscribeId: empty data", { raw });
      return { status: "error", message: "Empty or invalid JSON response" };
    }

    return { status: "success", data };
  } catch (err) {
    console.error("generateUnsubscribeId error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
