import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { createAuthToken } from "@src/utils/createAuthToken";

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

    const findBySocialRes = await fetch(
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
    const findBySocialData = await findBySocialRes.json();

    if (findBySocialData?.email) {
      const findByEmailRes = await fetch(
        `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbyemail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: createAuthToken(
              "site",
              process.env.CORE_MACHINEKEY!,
            ),
          },
          body: JSON.stringify({ email: findBySocialData.email }),
        },
      );
      const findByEmailData = await findByEmailRes.json();

      if (!findByEmailData || findByEmailData.length === 0) {
        return res
          .status(404)
          .json({ status: "error", message: "No tenants found" });
      }

      const map = new Map<string, { domain: string; path: string }>();

      for (const t of findByEmailData) {
        map.set(t.domain, { ...t, path: `${t.path}&social=true` });
      }

      for (const t of findBySocialData?.tenants || []) {
        if (!map.has(t.domain)) {
          map.set(t.domain, t);
        }
      }

      return res.status(200).json({
        status: "success",
        tenants: Array.from(map.values()),
      });
    }

    if (!findBySocialData?.tenants || findBySocialData.tenants.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No tenants found" });
    }

    return res.status(200).json({
      status: "success",
      tenants: findBySocialData.tenants,
    });
  } catch (err) {
    console.error("account error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
