import { languages } from "@src/config/data/languages";

export interface ILocale {
  locale: (typeof languages)[number]["shortKey"];
}
