import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import {
  findBySocial,
  findByEmail,
  generateKey,
} from "@src/lib/requests/thirdparty";
import { register } from "@src/lib/requests/thirdparty/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const { transport, awsRegion } = req.body;

    if (
      !transport ||
      typeof transport !== "string" ||
      !awsRegion ||
      typeof awsRegion !== "string"
    ) {
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

    if (!findBySocialData.data?.email) {
      return res
        .status(400)
        .json({ status: "error", message: "No email in social profile" });
    }

    const findByEmailData = await findByEmail({
      email: findBySocialData.data.email,
    });

    if (findByEmailData.status !== 200) {
      return res
        .status(findByEmailData.status)
        .json({ status: "error", message: findByEmailData.message });
    }

    if (findByEmailData.data?.length > 0) {
      const generateKeyData = await generateKey({
        email: findBySocialData.data.email,
      });

      if (generateKeyData.status !== 200) {
        return res
          .status(generateKeyData.status)
          .json({ status: "error", message: generateKeyData.message });
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
        query: `epkey=${generateKeyData.data.emailKey}1&eskey=${generateKeyData.data.linkKey}&transport=${transport}&awsRegion=${awsRegion}`,
      });
    } else {
      const registerData = await register({
        thirdPartyProfile: transport,
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      });

      if (registerData.status !== 200) {
        return res
          .status(registerData.status)
          .json({ status: "error", message: registerData.message });
      }

      return res.status(200).json({
        status: "success",
        reference: `${registerData.data.reference}&wizard=true`,
      });
    }
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
