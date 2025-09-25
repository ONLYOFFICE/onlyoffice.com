import type { NextApiRequest, NextApiResponse } from "next";
import { subscription } from "@src/lib/requests/subscription";
import { logError } from "@src/lib/helpers/logger";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { id, subscribe, newsOnly } = req.body;

    if (
      !id ||
      typeof id !== "string" ||
      typeof subscribe !== "boolean" ||
      typeof newsOnly !== "boolean"
    ) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request parameters",
      });
    }

    await subscription({
      id,
      subscribe,
      newsOnly,
    });

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
