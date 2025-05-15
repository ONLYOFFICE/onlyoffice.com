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
  en: "D MMMM YYYY",
  ja: "YYYY日M月D日",
  zh: "YYYY年M月D日",
};

export const formatDate = (
  date: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  return dayjs(date)
    .locale(locale)
    .format(formatMap[locale] || formatMap.en);
};
