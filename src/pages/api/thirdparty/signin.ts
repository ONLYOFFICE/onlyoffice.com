import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { createAuthToken } from "@src/utils/createAuthToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!(await checkRateLimit(req, res))) return;

  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email, passwordHash } = req.body;

    const findByEmailRes = await fetch(
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

    const findByEmailData = await findByEmailRes.json();

    if (!findByEmailData || findByEmailData.length === 0) {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid email or password" });
    }

    const findByEmailPasswordRes = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbyemailpassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ email, passwordHash }),
      },
    );

    const findByEmailPasswordData = await findByEmailPasswordRes.json();

    if (!findByEmailPasswordData || findByEmailPasswordData.length === 0) {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid email or password" });
    }

    if (findByEmailPasswordData.length === 1) {
      return res.status(200).json({
        status: "success",
        redirect: `${findByEmailPasswordData[0].domain}${findByEmailPasswordData[0].path}`,
      });
    }

    return res.status(200).json({
      status: "success",
      tenants: findByEmailPasswordData,
    });
  } catch (err) {
    console.error("signin error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
