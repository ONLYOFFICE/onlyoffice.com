import { ILocale } from "@src/types/locale";
import { languages } from "@src/config/data/languages";

export const getDisplayNameWithoutParentheses = (locale: ILocale["locale"]) => {
  const curLang = languages.find((lang) => lang.shortKey === locale);
  if (!curLang) return locale;

  const index = curLang.displayName.indexOf("(");
  return index === -1
    ? curLang.displayName
    : curLang.displayName.substring(0, index).trim();
};
