import type { NextApiRequest, NextApiResponse } from "next";
import { register } from "@src/lib/requests/thirdparty/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { thirdPartyProfile } = req.body;

    if (typeof thirdPartyProfile !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'thirdPartyProfile' field",
      });
    }

    const data = await register({
      thirdPartyProfile,
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
    });

    return res.status(200).json({ status: "success", data: data.data });
  } catch (err) {
    console.error("register error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
