import { ILocale } from "@src/types/locale";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/pt-br";
import "dayjs/locale/it";
import "dayjs/locale/cs";
import "dayjs/locale/nl";
import "dayjs/locale/ru";

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
  en: "MMMM YYYY",
  ja: "YYYY日M月",
  zh: "YYYY年M月",
};

type TFormat = "D MMMM YYYY" | "M/D/YYYY";

export const formatDateCards = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
  format: TFormat = "D MMMM YYYY",
) => {
  const map = format === "M/D/YYYY" ? formatMapShort : formatMapLong;
  return dayjs(date)
    .locale(locale)
    .format(map[locale] || map.en);
};
