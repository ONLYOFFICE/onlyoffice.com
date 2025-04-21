import { languages } from "@src/config/languages";

export interface ILocale {
  locale: (typeof languages)[number]["shortKey"];
}
