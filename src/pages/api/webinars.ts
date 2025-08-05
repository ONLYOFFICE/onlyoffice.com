import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { WebinarsForUsEmail } from "@src/components/emails/WebinarsForUsEmail";
import { WebinarsForUserEmail } from "@src/components/emails/WebinarsForUserEmail";

interface IWebinarsData {
	fullName: string;
	email: string;
	companyName: string;
	webinarTheme: string;
	webinarDate: string;
	questions: string;
	lang: string;
	ip: string | string[] | null;
  fromPage: string;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  create_on: Date;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const {
		fullName,
		email,
		companyName,
		webinarTheme,
		webinarDate,
		questions,
		lang,
		from,
	} = req.body;

	try {
		const errorMessages = [];
		const cookies = parse(req.headers.cookie || "");

		const addWebinarsRequest = async () => {
			try {
				const addWebinarsRequestData: IWebinarsData = {
					fullName,
					email,
					companyName,
					webinarTheme,
					webinarDate,
					questions,
					lang,
					fromPage: from,
					ip:
						req.headers["x-forwarded-for"] ||
						req.socket.remoteAddress ||
						null,
					utm_source: cookies.utmSource ?? null,
					utm_campaign: cookies.utmCampaign ?? null,
					utm_content: cookies.utmContent ?? null,
					utm_term: cookies.utmTerm ?? null,
					create_on: new Date(),
				};

				await db.query("INSERT INTO webinar_request SET ?", [
					addWebinarsRequestData,
				]);

				return {
					status: "success",
					message: "webinarsRequestSuccessful",
				};
			} catch (error: unknown) {
				console.error(
					"Insert Webinars api returns errors:",
					error instanceof Error ? error.message : error,
				);

				return {
					status: "error",
					message:
						error instanceof Error ? error.message : "Unknown error occurred",
				};
			}
		};

		const addWebinarsRequestResult = await addWebinarsRequest();
		if (addWebinarsRequestResult.status === "error") {
			errorMessages.push(
					`webinarsrequest: ${addWebinarsRequestResult.message}`,
				);
		}

		const transporter = emailTransporter();
		await transporter.sendMail({
			from,
			to: [process.env.WEBINARS_EMAIL!],
			subject: `${errorMessages.length ? "[Error] " : ""}${companyName} - Webinars For Us Request (${webinarTheme}) ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
			html: WebinarsForUsEmail({
				fullName,
				email,
				companyName,
				webinarTheme,
				webinarDate,
				lang,
				questions,
			})
		})

		await transporter.sendMail({
			from,
			to: email,
			subject: `You’ve successfully registered for ONLYOFFICE webinar`,
			html: WebinarsForUserEmail({
				webinarTheme,
				webinarDate,
			})
		})

		res.status(200).json({ status: "success", message: "success" });
	} catch (error) {
		console.error("Webinars api returns errors:", error);
		res.status(500).json({ status: "error", message: error });
	}
}
