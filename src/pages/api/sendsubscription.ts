import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { db } from "@src/config/db/site";
import { validateEmail } from "@src/utils/validators";
import { emailTransporter } from "@src/config/email/transporter";
import { SubscribeEmail } from "@src/components/emails/SubscribeEmail";
import { subscribeChecking } from "@src/lib/requests/subscription/subscribeChecking";
import { generateUnsubscribeId } from "@src/lib/requests/thirdparty";
import { getT } from "@src/lib/helpers/i18next";

enum SubscribeType {
  Common = 0,
  AppServer = 1,
  Opensource = 2,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const { firstName, email, type, locale } = req.body;

    if (
      typeof firstName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !type ||
      typeof type !== "string"
    ) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request parameters",
      });
    }

    const langPrefix = locale === "en" ? "" : locale;
    const t = await getT(locale, "SubscribeEmail");
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${langPrefix ? `/${langPrefix}` : ""}`;

    let parsedType: SubscribeType = SubscribeType.Common;
    if (
      type !== undefined &&
      Object.values(SubscribeType).includes(Number(type))
    ) {
      parsedType = Number(type);
    }

    const subscribe = {
      email,
      firstname: firstName,
      type: parsedType,
    };
    const subscribeJson = JSON.stringify(subscribe);

    const generateUnsubscribeIdData = await generateUnsubscribeId({
      email: subscribeJson,
    });

    if (generateUnsubscribeIdData.status !== 200) {
      return res
        .status(generateUnsubscribeIdData.status)
        .json({ status: "error", message: generateUnsubscribeIdData.message });
    }

    if (
      parsedType === SubscribeType.Common ||
      email === process.env.NONPROFIT_EMAIL
    ) {
      try {
        const transporter = emailTransporter();
        await transporter.sendMail({
          to: [email],
          subject: t("SubscribeToOONews"),
          html: await SubscribeEmail({
            baseUrl,
            subscribe: generateUnsubscribeIdData.data.unsubscribeId,
            language: locale,
          }),
        });
      } catch (error) {
        logError((req.url || "").split("?")[0], "Email transporter", error);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    } else {
      try {
        await subscribeChecking(db.core, email, firstName, parsedType);
      } catch (error) {
        logError((req.url || "").split("?")[0], "subscribeChecking", error);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
