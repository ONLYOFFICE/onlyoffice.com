import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { RowDataPacket } from "mysql2";
import { getConversionRate } from "@src/lib/requests/getConverionRate";

interface ICheckRatingData {
  userIP: string | string[] | null;
  converterPageName: string;
}

interface IInsertRatingData {
  ratingValue: number;
  converterPageName: string;
  userIP: string | string[] | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { ratingValue, converterPageName } = req.body;

    if (
      typeof ratingValue !== "number" ||
      !converterPageName ||
      typeof converterPageName !== "string"
    ) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const userIP =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;

    const checkRatingData: ICheckRatingData = {
      userIP,
      converterPageName,
    };

    // Check if the user already voted
    const [existing] = await db.query<RowDataPacket[]>(
      "SELECT 1 FROM converter_rating WHERE userIP = ? AND converterPageName = ? LIMIT 1",
      Object.values(checkRatingData),
    );

    if (existing.length > 0) {
      return res
        .status(409)
        .json({ status: "error", message: "Already voted from this IP" });
    }

    const insertRatingData: IInsertRatingData = {
      ratingValue,
      converterPageName,
      userIP,
    };

    // Insert new rating
    await db.query(
      "INSERT INTO converter_rating (ratingValue, converterPageName, userIP) VALUES (?, ?, ?)",
      Object.values(insertRatingData),
    );

    // Get updated rating stats
    const ratingStats = await getConversionRate({
      pageName: converterPageName,
    });

    if (ratingStats.status === "error") {
      return res.status(500).json({
        status: "error",
        message: "Rating saved, but failed to fetch updated stats",
      });
    }

    res.status(200).json({
      status: "success",
      message: "rateAppRequestSuccessful",
      numberOfVotes: ratingStats.numberOfVotes,
      averageRating: ratingStats.averageRating,
    });
  } catch (error) {
    console.error("Error saving rating:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
