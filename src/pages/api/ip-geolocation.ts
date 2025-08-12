import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { RowDataPacket } from "mysql2/promise";
import { regions } from "@src/config/data/docspace-regions";
import { regionsKeys } from "@src/config/constans/multiregion";

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

const regionsStringKeys =
  process.env.NEXT_PUBLIC_TESTING_ON === "true"
    ? regionsKeys.info
    : process.env.NEXT_PUBLIC_TESTING_ON === "false"
      ? regionsKeys.com
      : [];
const docspaceDomain = process.env.DOCSPACE_DOMAIN!;
const baseDomain = process.env.CORE_BASE_DOMAIN!;
const docspaceRegion = docspaceDomain.split(".")[1];
const baseMapKeyString = "core.region-map";
const baseDbConnKeyString = "core";
const [baseHost, baseHostingRegion] = baseDomain.split(".");

const regionDbEntities = regionsStringKeys
  .map(({ key, value: hostingRegion }) => {
    if (!key.startsWith(baseMapKeyString)) return null;

    const regionDbKey = key
      .substring(baseMapKeyString.length)
      .replace(/^\./, "");

    const dbConnectionStringKey =
      hostingRegion === baseHostingRegion
        ? baseDbConnKeyString
        : `${baseDbConnKeyString}.${hostingRegion}`;

    const domain = hostingRegion.startsWith(docspaceRegion)
      ? docspaceDomain
      : `${baseHost}.${hostingRegion}`;

    return {
      regionDbKey,
      hostingRegion,
      domain,
      dbConnectionStringKey,
    };
  })
  .filter(Boolean);

const defaultRegionDbEntity = regionDbEntities[0] ?? null;

const getRegionDbEntityByDbKey = (dbKey: string) => {
  const configKey = !dbKey ? baseMapKeyString : baseMapKeyString + "." + dbKey;

  const currentHostedRegion = regionsStringKeys.find(
    (item) => item.key === configKey,
  );

  if (!currentHostedRegion) {
    return defaultRegionDbEntity;
  }

  const currentDomain = currentHostedRegion.value.startsWith(docspaceRegion)
    ? docspaceDomain
    : baseHost + "." + currentHostedRegion.value;

  const connStringKey = baseDbConnKeyString + "." + currentHostedRegion.value;

  return {
    regionDbKey: dbKey,
    hostingRegion: currentHostedRegion.value,
    domain: currentDomain,
    dbConnectionStringKey: connStringKey,
  };
};

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

    const [rows] = await db.teamlabsite.query<ILocationRow[]>(
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
      const region = regions.find((r) => r.name === match.country);
      const dbKey =
        region && region.mappedTo !== ""
          ? `${docspaceRegion}${region.mappedTo}`
          : "core";
      const lang = region && region.lang !== "" ? region.lang : "";
      const countryCallingCodeKey =
        region && region.countryCallingCodeKey !== ""
          ? region.countryCallingCodeKey
          : "";

      const data = {
        ipStart: match.ip_start,
        ipEnd: match.ip_end,
        country: match.country,
        city: match.city,
        timezoneOffset: match.timezone_offset,
        timezoneName: match.timezone_name,
        lang,
        countryCallingCodeKey,
        regionDbEntity: getRegionDbEntityByDbKey(dbKey),
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
