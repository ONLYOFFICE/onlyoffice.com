import { createAuthToken } from "@src/utils/createAuthToken";

interface IValidateUnsubscribeId {
  id: string;
}

export const validateUnsubscribeId = async ({ id }: IValidateUnsubscribeId) => {
  try {
    const res = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/key/validateunsubscribeid`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ UnsubscribeId: id }),
      },
    );

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("validateUnsubscribeId error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
