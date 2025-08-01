import { createAuthToken } from "@src/utils/createAuthToken";

interface IRestorePassword {
  email: string;
}

export const resetPassword = async ({ email }: IRestorePassword) => {
  try {
    const res = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/resetpassword`,
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
    console.error("Reset password error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
