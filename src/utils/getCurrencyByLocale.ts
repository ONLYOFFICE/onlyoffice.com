import { ILocale } from "@src/types/locale";
import { TCurrencyCode, TCurrencySymbol } from "@src/types/prices";

export function getCurrencyByLocale(locale: ILocale["locale"]): {
  code: TCurrencyCode;
  symbol: TCurrencySymbol;
} {
  switch (locale) {
    case "fr":
    case "de":
    case "es":
    case "it":
    case "cs":
    case "nl":
    case "ru":
      return { code: "EUR", symbol: "€" };
    case "zh":
      return { code: "CNY", symbol: "¥" };
    default:
      return { code: "USD", symbol: "$" };
  }
}
