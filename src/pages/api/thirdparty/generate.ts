import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@src/utils/validators";
import { generateKey } from "@src/lib/requests/thirdparty/generate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email } = req.body;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

    const data = await generateKey({ email });

    if (data.status !== "success") {
      return res.status(504).json({
        status: "error",
        message: data.message || "Failed to reset password",
      });
    }

    return res.status(200).json({ status: "success", data: data.data });
  } catch (err) {
    console.error("generate key error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
