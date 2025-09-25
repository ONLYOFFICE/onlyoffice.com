import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { db } from "@src/config/db/site";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { MailTemplateEmail } from "@src/components/emails/MailTemplateEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

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

  try {
    if (
      !message ||
      typeof message !== "string" ||
      !checkboxes ||
      typeof checkboxes !== "string" ||
      typeof mark1 !== "number" ||
      typeof mark2 !== "number" ||
      typeof mark3 !== "number" ||
      typeof mark4 !== "number" ||
      typeof mark5 !== "number" ||
      typeof mark6 !== "number" ||
      typeof spam !== "number" ||
      typeof calls !== "number" ||
      typeof from !== "string" ||
      !table_name ||
      typeof table_name !== "string" ||
      !locale ||
      typeof locale !== "string" ||
      (!isTestEmail(email) &&
        (!hCaptchaResponse || typeof hCaptchaResponse !== "string"))
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const ip = getClientIp(req);

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "hCaptchaInvalid",
        });
      }
    }

    if (req.headers.referer) {
      try {
        const commonFields: Record<
          string,
          string | string[] | number | Date | null
        > = {
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
          Record<string, string | string[] | number | Date | null>
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
      } catch (error) {
        logError((req.url || "").split("?")[0], "DB", error);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to:
          table_name === "desktop_uninstalled_request"
            ? [process.env.FEEDBACK_EMAIL!]
            : [process.env.FEEDBACK_EMAIL!, process.env.SUPPORT_EMAIL!],
        subject: `Request ${from}`,
        html: MailTemplateEmail({
          fromPage: from,
          checkboxes,
          message,
          email,
          languageCode: locale,
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
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
