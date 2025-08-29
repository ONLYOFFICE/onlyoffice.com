import { ILocale } from "@src/types/locale";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/pt";
import "dayjs/locale/it";
import "dayjs/locale/cs";
import "dayjs/locale/nl";
import "dayjs/locale/ru";

const formatMap: Record<ILocale["locale"], string> = {
  en: "MMMM, D",
  de: "D. MMMM",
  fr: "D MMMM",
  es: "D [de] MMMM",
  pt: "D [de] MMMM",
  it: "D MMMM",
  cs: "D. MMMM",
  nl: "D MMMM",
  ru: "D MMMM",
  ja: "M月D日",
  zh: "M月D日",
};

export const discoverFormatDate = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  return dayjs(date)
    .locale(locale)
    .format(formatMap[locale] || formatMap.en);
};
