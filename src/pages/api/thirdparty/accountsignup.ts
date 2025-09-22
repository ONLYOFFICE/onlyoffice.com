import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { createAuthToken } from "@src/utils/createAuthToken";
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

    if (!findBySocialData?.email) {
      return res
        .status(400)
        .json({ status: "error", message: "No email in social profile" });
    }

    const findByEmailRes = await fetch(
      `${process.env.THIRDPARTY_DOMAIN}/multiregion/findbyemail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
        },
        body: JSON.stringify({ email: findBySocialData.email }),
      },
    );

    const findByEmailData = await findByEmailRes.json();

    if (findByEmailData?.length > 0) {
      const generateKeyRes = await fetch(
        `${process.env.THIRDPARTY_DOMAIN}/key/generate`,
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

      const generateKeyData = await generateKeyRes.json();

      return res.status(200).json({
        status: "success",
        tenants: findByEmailData.map(
          (tenant: { domain: string; path: string }) => ({
            ...tenant,
            path: `${tenant.path}&social=true`,
          }),
        ),
        query: `epkey=${generateKeyData.emailKey}1&eskey=${generateKeyData.linkKey}&transport=${transport}&awsRegion=${awsRegion}`,
      });
    } else {
      const registerRes = await register({
        thirdPartyProfile: transport,
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      });

      return res.status(200).json({
        status: "success",
        reference: `${registerRes.data.reference}&wizard=true`,
      });
    }
  } catch (err) {
    console.error("accountsignup error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
