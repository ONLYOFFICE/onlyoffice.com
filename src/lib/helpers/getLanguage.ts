import type { NextApiRequest } from "next";
import { languages } from "@src/config/data/languages";

export function getLanguage(req: NextApiRequest): string {
  const locale =
    (req.query.__nextLocale as string) ||
    (req.headers.referer?.split("/")[3] ?? "en");

  const availableShortKeys = languages.map((l) => l.shortKey);
  return availableShortKeys.includes(locale) ? locale : "en";
}
