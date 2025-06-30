import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { RowDataPacket } from "mysql2/promise";

interface ILocationRow extends RowDataPacket {
  ip_start: string;
  ip_end: string;
  country: string;
  city: string;
  timezone_offset: number;
  timezone_name: string;
}

const ipCache = new Map<string, unknown>();

function formatIP(ip: string | undefined) {
  ip = (ip || "").trim();

  if (ip.includes(".")) {
    // IPv4
    if (ip.length === 15) {
      return ip;
    }
    return ip
      .split(":")[0]
      .split(".")
      .map((s: string) => ("00" + s).slice(-3))
      .join(".");
  } else if (ip.includes(":")) {
    // IPv6
    if (ip.length === 39) {
      return ip;
    }

    const parts = ip.split("::");
    if (parts.length === 2) {
      const left = parts[0].split(":").filter(Boolean);
      const right = parts[1].split(":").filter(Boolean);
      const fillCount = 8 - (left.length + right.length);
      ip = [...left, ...new Array(fillCount).fill("0"), ...right].join(":");
    }

    return ip
      .split(":")
      .map((s) => ("0000" + s).slice(-4))
      .join(":");
  } else {
    throw new Error("Unknown IP: " + ip);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const forwarded = req.headers["x-forwarded-for"];
    let ip: string | undefined;

    if (typeof forwarded === "string") {
      ip = forwarded.split(",")[0];
    } else if (Array.isArray(forwarded)) {
      ip = forwarded[0];
    } else {
      ip = req.socket.remoteAddress ?? undefined;
    }

    if (!ip) {
      return res.status(400).json({ error: "IP not found" });
    }

    const ipFormatted = formatIP(ip);

    if (ipCache.has(ipFormatted)) {
      return res.status(200).json(ipCache.get(ipFormatted));
    }

    const [rows] = await db.query<ILocationRow[]>(
      `
      SELECT ip_start, ip_end, country, city, timezone_offset, timezone_name
      FROM dbip_location
      WHERE ip_start <= ?
      ORDER BY ip_start DESC
      LIMIT 1
    `,
      [ipFormatted],
    );

    const match = rows.find((row) => ipFormatted <= row.ip_end);

    if (match) {
      const data = {
        ipStart: match.ip_start,
        ipEnd: match.ip_end,
        country: match.country,
        city: match.city,
        timezoneOffset: match.timezone_offset,
        timezoneName: match.timezone_name,
      };

      ipCache.set(ipFormatted, data);
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "No location found", ip });
    }
  } catch (error) {
    console.error("Geo lookup failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
