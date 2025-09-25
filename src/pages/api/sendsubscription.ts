import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { getLanguage } from "@src/lib/helpers/getLanguage";
import { db } from "@src/config/db/site";
import { validateEmail } from "@src/utils/validators";
import { emailTransporter } from "@src/config/email/transporter";
import { SubscribeEmail } from "@src/components/emails/Subscribe";
import { subscribeChecking } from "@src/utils/subscription/subscribeChecking";
import { generateUnsubscribeId } from "@src/lib/requests/thirdparty/generateUnsubscribeId";

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
    const { firstName, email, type } = req.body;

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

    const language = getLanguage(req);
    const baseUrl = `${req.headers.origin}${language ? `/${language}` : ""}`;

    const emailSubjects: Record<string, Record<string, string>> = {
      en: { subscribe: "Subscribe to ONLYOFFICE news" },
      de: { subscribe: "Abonnieren Sie die ONLYOFFICE-Nachrichten" },
      es: { subscribe: "Suscríbete a las noticias de ONLYOFFICE" },
      fr: { subscribe: "Abonnez-vous aux nouvelles de ONLYOFFICE" },
      it: { subscribe: "Iscriviti alle news di ONLYOFFICE" },
      ja: { subscribe: "ONLYOFFICEニュースレターの登録" },
      nl: { subscribe: "Abonneer u op ONLYOFFICE-nieuws" },
      pt: { subscribe: "Assine as notícias do ONLYOFFICE" },
      ru: { subscribe: "Подпишитесь на новости ONLYOFFICE" },
      zh: { subscribe: "订阅 ONLYOFFICE 新闻" },
    };

    const lang = language && emailSubjects[language] ? language : "en";
    const subject = emailSubjects[lang].subscribe;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

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

    if (
      parsedType === SubscribeType.Common ||
      email === process.env.NONPROFIT_EMAIL
    ) {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [email],
        subject: subject,
        html: SubscribeEmail({
          baseUrl,
          subscribe: generateUnsubscribeIdData.data.unsubscribeId,
          language,
        }),
      });
    } else {
      try {
        await subscribeChecking(db.core, email, firstName, parsedType);
      } catch (err) {
        console.error("subscribeChecking error:", err);
        return res
          .status(500)
          .json({ status: "error", message: "subscribeCheckingError" });
      }
    }

    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error("sendSubscription error:", err);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
