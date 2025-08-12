import { db } from "@src/config/db/site";
import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { RowDataPacket } from "mysql2";

interface IAddFreeCloudData {
  first_name: string;
  last_name: string;
  email: string;
  tenant_alias: string;
  you_are: string;
  url: string;
  url_hash: string;
  culture: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    portalName,
    youAre,
    yourWebsiteURL,
    culture,
  } = req.body;

  const addFreeCloudRequest = async () => {
    const url = yourWebsiteURL;
    const urlHash = url
      ? crypto.createHash("md5").update(url, "utf8").digest("hex")
      : "";
    try {
      const addFreeCloud: IAddFreeCloudData = {
        first_name: firstName,
        last_name: lastName,
        email,
        tenant_alias: portalName,
        you_are: youAre,
        url,
        url_hash: urlHash,
        culture,
      };

      const [rows] = await db.teamlabsite.query<
        ({ cnt: number } & RowDataPacket)[]
      >(
        "SELECT COUNT(*) AS cnt FROM non_profit_request WHERE tenant_alias = ?",
        [portalName],
      );
      const exists = rows[0].cnt > 0;

      if (exists) {
        await db.teamlabsite.query(
          "UPDATE non_profit_request SET ? WHERE tenant_alias = ?",
          [addFreeCloud, portalName],
        );
        return {
          status: "update",
          message: "freeCloudRequestSuccessful",
        };
      } else {
        await db.teamlabsite.query("INSERT INTO non_profit_request SET ?", [
          addFreeCloud,
        ]);

        return {
          status: "success",
          message: "freeCloudRequestSuccessful",
        };
      }
    } catch (error) {
      console.error(error);
      return {
        status: "error",
        error,
        message: "freeCloudRequestFailed",
      };
    }
  };

  const result = await addFreeCloudRequest();

  return res.status(200).json(result);
}
