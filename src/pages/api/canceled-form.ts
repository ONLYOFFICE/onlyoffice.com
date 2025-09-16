import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { MailTemplate } from "@src/components/emails/MailTemplate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  const {
    email,
    message,
    checkboxes,
    mark1,
    mark2,
    mark3,
    mark4,
    mark5,
    mark6,
    spam,
    calls,
    from,
    table_name,
    locale,
    hCaptchaResponse,
  } = req.body;
  const ip =
    (Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"]
    )?.split(",")[0] ||
    req.socket.remoteAddress ||
    null;

  if (!isTestEmail(email)) {
    const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

    if (!hCaptchaResult.success) {
      return res.status(400).json({
        status: "errorHCaptchaInvalid",
        error: hCaptchaResult.error,
      });
    }
  }

  try {
    const commonFields: Record<string, string | string[] | Date | null> = {
      message,
      ip,
      create_on: new Date(),
      lang: locale,
      spam,
      calls,
    };

    if (email) {
      commonFields.email = email;
    }

    const dataByTable: Record<
      string,
      Record<string, string | string[] | Date | null>
    > = {
      registration_cancelled_request: {
        switched_to_on_premises: mark1,
        experienced_technical_problems: mark2,
        did_not_find_necessary_features: mark3,
        privacy_concerns_or_legal_violation: mark4,
        i_rarely_use_onlyoffice: mark5,
        other: mark6,
        ...commonFields,
      },
      desktop_uninstalled_request: {
        experienced_technical_problems: mark1,
        i_will_use_another_desktop_software: mark2,
        did_not_find_necessary_features: mark3,
        privacy_concerns_or_legal_violation: mark4,
        i_rarely_use_onlyoffice_desktop_editors: mark5,
        other: mark6,
        ...commonFields,
      },
      account_cancelled_request: {
        experienced_technical_problems: mark1,
        need_more_storage_space: mark2,
        did_not_find_necessary_features: mark3,
        privacy_concerns_or_legal_violation: mark4,
        i_rarely_work_in_browser: mark5,
        other: mark6,
        ...commonFields,
      },
      install_cancelled_request: {
        switched_to_the_cloud_version: mark1,
        experienced_technical_problems: mark2,
        did_not_find_necessary_features: mark3,
        privacy_concerns_or_legal_violation: mark4,
        i_rarely_use_onlyoffice: mark5,
        other: mark6,
        ...commonFields,
      },
    };

    const selectedData = dataByTable[table_name];

    await db.teamlabsite.query(`INSERT INTO ${table_name} SET ?`, [
      selectedData,
    ]);

    const transporter = emailTransporter();
    const to =
      table_name === "desktop_uninstalled_request"
        ? [process.env.FEEDBACK_EMAIL!]
        : [process.env.FEEDBACK_EMAIL!, process.env.SUPPORT_EMAIL!];

    await transporter.sendMail({
      from: `"Cloud Office Applications" <${process.env.TRANSPORTER_EMAIL_AUTH_USER}>`,
      to,
      subject: `Request ${from}`,
      html: MailTemplate({
        fromPage: from,
        checkboxes,
        message,
        email,
        languageCode: locale,
      }),
    });

    return res.status(200).json({
      status: "success",
      message: "InstallCanceledRequestSuccessful",
    });
  } catch (error) {
    console.error("Install canceled error:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
