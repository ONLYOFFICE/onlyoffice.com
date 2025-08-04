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
    const { transport } = req.body;

    if (!transport || typeof transport !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'transport' field",
      });
    }

    const apiRes = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbysocial`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ transport }),
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
    console.error("findbysocial error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
