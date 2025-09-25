import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { findBySocial, findByEmail } from "@src/lib/requests/thirdparty";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const { transport } = req.body;

    if (!transport || typeof transport !== "string") {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const findBySocialData = await findBySocial({ transport });

    if (findBySocialData.status !== 200) {
      return res
        .status(findBySocialData.status)
        .json({ status: "error", message: findBySocialData.message });
    }

    if (findBySocialData.data?.email) {
      const findByEmailData = await findByEmail({
        email: findBySocialData.data.email,
      });

      if (findByEmailData.status !== 200) {
        return res
          .status(findByEmailData.status)
          .json({ status: "error", message: findByEmailData.message });
      }

      const map = new Map<string, { domain: string; path: string }>();

      for (const t of findByEmailData.data) {
        map.set(t.domain, { ...t, path: `${t.path}&social=true` });
      }

      for (const t of findBySocialData.data?.tenants || []) {
        if (!map.has(t.domain)) {
          map.set(t.domain, t);
        }
      }

      return res.status(200).json({
        status: "success",
        tenants: Array.from(map.values()),
      });
    }

    if (
      !findBySocialData.data?.tenants ||
      findBySocialData.data.tenants.length === 0
    ) {
      return res
        .status(404)
        .json({ status: "error", message: "No tenants found" });
    }

    return res.status(200).json({
      status: "success",
      tenants: findBySocialData.data.tenants,
    });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
