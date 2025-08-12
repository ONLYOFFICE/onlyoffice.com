import mysql from "mysql2/promise";
import { RowDataPacket } from "mysql2";
import { updateTeamlabNewsSubscription } from "./updateTeamlabNewsSubscription";
import { validateEmail } from "../validators";

export const subscribeChecking = async (
  dbConnectionString: mysql.Pool,
  email: string,
  firstName: string,
  type: number,
) => {
  if (typeof email !== "string" || !validateEmail(email)) {
    return { message: "Missing or invalid 'email' field" };
  }

  const normalizedEmail = email.toLowerCase();

  const [rows] = await dbConnectionString.query<RowDataPacket[]>(
    `SELECT COUNT(*) as count 
     FROM template_subscribe 
     WHERE email = ? AND type = ?`,
    [normalizedEmail, type],
  );

  if (rows[0].count > 0) {
    await updateTeamlabNewsSubscription(
      dbConnectionString,
      normalizedEmail,
      true,
    );
    return { message: "Subscription updated" };
  } else {
    await dbConnectionString.query(
      `INSERT IGNORE INTO template_subscribe (email, firstname, type) 
       VALUES (?, ?, ?)`,
      [normalizedEmail, firstName || "", type],
    );
    return { message: "Subscription added" };
  }
};
