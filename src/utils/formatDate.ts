import { languages } from "@src/config/languages";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/pt-br";
import "dayjs/locale/it";
import "dayjs/locale/cs";
import "dayjs/locale/nl";
import "dayjs/locale/ru";

type TLanguageShortKey = (typeof languages)[number]["shortKey"];

const formatMap: Record<TLanguageShortKey, string> = {
  en: "D MMMM YYYY",
  ja: "YYYY日M月D日",
  zh: "YYYY年M月D日",
};

export const formatDate = (
  date: string | Date,
  locale: TLanguageShortKey = "en",
) => {
  return dayjs(date)
    .locale(locale)
    .format(formatMap[locale] || formatMap.en);
};
