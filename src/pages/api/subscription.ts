import type { NextApiRequest, NextApiResponse } from "next";
import { subscription } from "@src/lib/requests/subscription";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email, subscribe, newsOnly } = req.body;

    if (
      typeof email !== "string" ||
      typeof subscribe !== "boolean" ||
      typeof newsOnly !== "boolean"
    ) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid fields",
      });
    }

    await subscription({
      email,
      subscribe,
      newsOnly,
    });

    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
