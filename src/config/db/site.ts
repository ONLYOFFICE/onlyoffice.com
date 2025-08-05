import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.ONLYOFFICE_SITE_MYSQL_HOST,
  database: process.env.ONLYOFFICE_SITE_MYSQL_DATABASE,
  user: process.env.ONLYOFFICE_SITE_MYSQL_USER,
  password: process.env.ONLYOFFICE_SITE_MYSQL_PASSWORD,
});

export { db };
