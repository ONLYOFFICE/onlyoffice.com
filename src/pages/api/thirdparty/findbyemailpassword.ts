import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@src/utils/validators";
import { createAuthToken } from "@src/utils/createAuthToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email, password, passwordHash = null } = req.body;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

    if (typeof password !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'password' field",
      });
    }

    const apiRes = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbyemailpassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ email, password, passwordHash }),
      },
    );

    const data = await apiRes.json();

    if (!apiRes.ok || data?.error || data?.message) {
      console.error("API error:", data);
      return res.status(apiRes.status).json({
        status: "error",
        message: data?.message || "Unexpected API error",
      });
    }

    return res.status(200).json({ status: "success", data });
  } catch (err) {
    console.error("findbyemailpassword error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
