import mysql, { Pool } from "mysql2/promise";
import { connectionStrings } from "./connectionStrings";

type DBPools = Record<string, Pool>;
const db: DBPools = {};

for (const { name, connectionString } of connectionStrings) {
  if (!connectionString) {
    throw new Error(`Missing connection string for "${name}".`);
  }

  db[name] = mysql.createPool(connectionString);
}

export { db };
