import { db } from "@src/config/db/site";
import { connectionStrings } from "@src/config/db/connectionStrings";
import { updateTeamlabNewsSubscription } from "@src/utils/subscription/updateTeamlabNewsSubscription";

interface IUnsubscribe {
  email: string;
  subscribe: boolean;
  newsOnly: boolean;
}

export const subscription = async ({
  email,
  subscribe,
  newsOnly,
}: IUnsubscribe) => {
  const emailLower = email.toLowerCase();

  try {
    if (db.core) {
      await updateTeamlabNewsSubscription(db.core, email, subscribe);
    }

    if (!subscribe && !newsOnly && connectionStrings?.length) {
      const filteredConnections = connectionStrings.filter(
        ({ name }) => name.startsWith("core") || name === "personal",
      );

      await Promise.all(
        filteredConnections.map(async ({ name }) => {
          const pool = db[name];
          if (!pool) {
            console.error(`Skipping "${name}" because pool is missing.`);
            return;
          }

          try {
            await pool.execute(
              `UPDATE core_user SET activation_status = ? WHERE email = ?`,
              [0, emailLower], // 0 = NotActivated
            );
          } catch (err) {
            console.error(`DeactivateEmail error in ${name}:`, err);
          }
        }),
      );
    }

    return { status: "success", message: "emailUnsubscribe" };
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
