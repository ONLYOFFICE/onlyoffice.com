import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email, passwordHash } = req.body;

    const response = await fetch(
      `${process.env.DOCSPACE_REGISTRATION_API}.${process.env.DOCSPACE_DOMAIN!.split(".").pop()}/apisystem/portal/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "signin",
          email,
          passwordHash,
          docspace: true,
        }),
      },
    );

    const data = await response.json();

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
