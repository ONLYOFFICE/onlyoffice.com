import { createAuthToken } from "@src/utils/createAuthToken";

interface IFindByEmail {
  email: string;
}

export const findByEmail = async ({ email }: IFindByEmail) => {
  try {
    const res = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbyemail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ email }),
      },
    );

    const data = await res.json();

    return res.ok
      ? { status: "success", data }
      : { status: "error", message: `Error: ${res.status} ${res.statusText}` };
  } catch (err) {
    console.error("Find by email error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
