import mysql from "mysql2/promise";
import { RowDataPacket } from "mysql2";

export const updateTeamlabNewsSubscription = async (
  dbConnectionString: mysql.Pool,
  email: string,
  needSubscribe: boolean,
) => {
  try {
    const [rows] = await dbConnectionString.query<RowDataPacket[]>(
      `SELECT COUNT(email) as count FROM template_unsubscribe WHERE email = ?`,
      [email.toLowerCase()],
    );

    const isTeamlabNewsSubscribed = rows[0].count === 0;

    console.debug(
      `SaveSubscribtionSettings. isTeamlabNewsSubscribed=${isTeamlabNewsSubscribed}, forSubscribeList.Contains('0')=${needSubscribe}`,
    );

    if (!needSubscribe && isTeamlabNewsSubscribed) {
      console.debug("SaveSubscribtionSettings. UNSubscribe action");

      await dbConnectionString.query(
        `INSERT IGNORE INTO template_unsubscribe (email) VALUES (?)`,
        [email.toLowerCase()],
      );
    } else if (needSubscribe && !isTeamlabNewsSubscribed) {
      console.debug("SaveSubscribtionSettings. Subscribe action");

      await dbConnectionString.query(
        `DELETE FROM template_unsubscribe WHERE email = ?`,
        [email.toLowerCase()],
      );
    }

    console.debug("IsTeamlabNewsSubscribed: ...SelectCount('email') > 0");
    return isTeamlabNewsSubscribed;
  } catch (err) {
    console.error("Database error in updateTeamlabNewsSubscription:", err);
    return false;
  }
};
