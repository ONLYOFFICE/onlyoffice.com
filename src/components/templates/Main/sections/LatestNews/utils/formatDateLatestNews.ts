import { ILocale } from "@src/types/locale";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/pt";
import "dayjs/locale/it";
import "dayjs/locale/cs";
import "dayjs/locale/ja";
import "dayjs/locale/nl";
import "dayjs/locale/ru";
import "dayjs/locale/zh";

const formatMapShort: Record<ILocale["locale"], string> = {
  en: "M/D/YYYY",
  fr: "DD/MM/YYYY",
  de: "DD.MM.YYYY",
  es: "DD/MM/YYYY",
  pt: "DD/MM/YYYY",
  it: "DD/MM/YYYY",
  cs: "DD.MM.YYYY",
  nl: "D-M-YYYY",
  ja: "YYYY/MM/DD",
  zh: "YYYY/M/D",
  ru: "DD.MM.YYYY",
  sr: "D.M.YYYY.",
};

const formatMapLong: Record<ILocale["locale"], string> = {
  en: "D MMMM YYYY",
  de: "D. MMMM YYYY",
  es: "DD [de] MMMM, YYYY",
  pt: "DD [de] MMMM [de] YYYY",
  ja: "YYYY[年]MMMMD[日]",
  zh: "YYYY[年]MMMD[日]",
  ru: "D MMMM YYYY",
  cs: "D. MMMM YYYY",
};

type TFormat = "D MMMM YYYY" | "M/D/YYYY";

export const formatDateLatestNews = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
  format: TFormat = "D MMMM YYYY",
) => {
  const map = format === "M/D/YYYY" ? formatMapShort : formatMapLong;
  return dayjs(date)
    .locale(locale)
    .format(map[locale] || map.en);
};
