import { db } from "@src/config/db/site";
import type { RowDataPacket } from "mysql2/promise";

interface IProductDetails extends RowDataPacket {
  prod_name: string;
  version: string;
  lastmodified: string | Date;
  url: string;
  url_zh?: string;
  size: string;
  create_on: Date;
}

function normalizeDates<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export const getProductsDetails = async ({
  key,
}: { key?: string | string[] } = {}) => {
  const baseQuery = `SELECT prod_name, version, lastmodified, url, size, create_on, url_zh FROM products_details`;

  let rows: IProductDetails[] = [];

  if (typeof key === "string" && key.trim() !== "") {
    [rows] = await db.execute<IProductDetails[]>(
      `${baseQuery} WHERE prod_name = ?`,
      [key],
    );
    return rows.length > 0 ? normalizeDates(rows[0]) : null;
  }

  if (Array.isArray(key) && key.length > 0) {
    const placeholders = key.map(() => "?").join(", ");
    [rows] = await db.execute<IProductDetails[]>(
      `${baseQuery} WHERE prod_name IN (${placeholders})`,
      key,
    );
  } else {
    [rows] = await db.execute<IProductDetails[]>(baseQuery);
  }

  const result: Record<string, IProductDetails> = {};
  for (const item of rows) {
    result[item.prod_name] = item;
  }

  return normalizeDates(result);
};
