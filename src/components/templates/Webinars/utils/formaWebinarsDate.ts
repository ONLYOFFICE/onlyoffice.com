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
import "dayjs/locale/zh";
import "dayjs/locale/sr";

const formatMap: Record<ILocale["locale"], string> = {
  en: "MMMM D, YYYY",
  ja: "YYYY年M月D日",
  zh: "YYYY年M月D日",
  fr: "D MMMM YYYY",
  de: "D. MMMM YYYY",
  es: "D [de] MMMM [de] YYYY",
  pt: "D [de] MMMM [de] YYYY",
  it: "D MMMM YYYY",
  cs: "D. MMMM YYYY",
  nl: "D MMMM YYYY",
  ru: "D MMMM YYYY г.",
  sr: "D. MMMM YYYY"
};

const formatMapWithHours: Record<ILocale["locale"], string> = {
  en: "MMMM D, YYYY h:mm A",
  ja: "YYYY年M月D日 H:mm",
  zh: "YYYY年M月D日AH点mm分",
  fr: "D MMMM YYYY H:mm",
  de: "D. MMMM YYYY H:mm",
  es: "D [de] MMMM [de] YYYY H:mm",
  pt: "D [de] MMMM [de] YYYY [às] H:mm",
  it: "D MMMM YYYY H:mm",
  cs: "D. MMMM YYYY H:mm",
  nl: "D MMMM YYYY H:mm",
  ru: "D MMMM YYYY г., H:mm",
  sr: "D. MMMM YYYY H:mm"
};

export const formatWebinarsDate = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  const formatedDate = dayjs(date)
    .locale(locale)
    .format(formatMap[locale] || formatMap.en);

  if (locale === "pt") {
    return formatedDate.replace(
      /de (\p{L})([\p{L}]+)/u,
      (_, first, rest) => `de ${first.toUpperCase()}${rest}`
    );
  }

  return formatedDate;
};

export const formatWebinarsDateWithHours = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  const formatedDate = dayjs(date)
    .locale(locale)
    .format(formatMapWithHours[locale] || formatMapWithHours.en);

  if (locale === "pt") {
    return formatedDate.replace(
      /de (\p{L})([\p{L}]+)/u,
      (_, first, rest) => `de ${first.toUpperCase()}${rest}`
    );
  }

  return formatedDate;
};
