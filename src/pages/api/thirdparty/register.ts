import type { NextApiRequest, NextApiResponse } from "next";
import { createAuthToken } from "@src/utils/createAuthToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email } = req.body;

    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
      req.socket.remoteAddress ||
      "";
    const token = createAuthToken("site", "");

    const response = await fetch(
      `${process.env.DOCSPACE_REGISTRATION_API}.${process.env.DOCSPACE_DOMAIN!.split(".").pop()}/apisystem/portal/registerbyemail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Forwarded-For": ip,
          Authorization: token,
        },
        body: JSON.stringify({
          email,
        }),
      },
    );

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok || data?.error || data?.message) {
      console.error("API returned an error:", data);
      return res.status(response.status).json({
        status: "error",
        message: data?.message || "Unexpected API error",
      });
    }

    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.error("RegisterPortal error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
