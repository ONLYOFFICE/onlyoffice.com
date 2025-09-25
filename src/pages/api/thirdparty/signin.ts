import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { findByEmailPassword } from "@src/lib/requests/thirdparty";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const { email, passwordHash } = req.body;

    if (
      typeof email !== "string" ||
      !validateEmail(email) ||
      !passwordHash ||
      typeof passwordHash !== "string"
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const findByEmailPasswordData = await findByEmailPassword({
      email,
      passwordHash,
    });

    if (findByEmailPasswordData.status !== 200) {
      return res
        .status(findByEmailPasswordData.status)
        .json({ status: "error", message: findByEmailPasswordData.message });
    }

    if (
      !findByEmailPasswordData.data ||
      findByEmailPasswordData.data.length === 0
    ) {
      return res.status(400).json({
        status: "error",
        message: "Failed to find by email or password",
      });
    }

    if (findByEmailPasswordData.data.length === 1) {
      return res.status(200).json({
        status: "success",
        redirect: `${findByEmailPasswordData.data[0].domain}${findByEmailPasswordData.data[0].path}`,
      });
    }

    return res.status(200).json({
      status: "success",
      tenants: findByEmailPasswordData.data,
    });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
