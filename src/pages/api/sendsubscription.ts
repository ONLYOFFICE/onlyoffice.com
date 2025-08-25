import type { NextApiRequest, NextApiResponse } from "next";
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

  try {
    const { language, firstName, email, type } = req.body;
    const baseUrl = `${req.headers.origin}${language ? `/${language}` : ""}`;

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

    console.log(generateUnsubscribeIdData);

    if (
      parsedType === SubscribeType.Common ||
      email === process.env.NONPROFIT_EMAIL
    ) {
      const transporter = emailTransporter();
      await transporter.sendMail({
        from: `"Cloud Office Applications" <${process.env.TRANSPORTER_EMAIL_AUTH_USER}>`,
        to: [email],
        subject: "Subscribe to ONLYOFFICE news",
        html: SubscribeEmail({
          baseUrl,
          subscribe: generateUnsubscribeIdData.data.unsubscribeId,
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
