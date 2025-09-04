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

const formatMap: Record<ILocale["locale"], string> = {
  en: "YYYY",
  ja: "YYYY日",
  zh: "YYYY年",
};

export const discoverFormatYear = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  return dayjs(date)
    .locale(locale)
    .format(formatMap[locale] || formatMap.en);
};
