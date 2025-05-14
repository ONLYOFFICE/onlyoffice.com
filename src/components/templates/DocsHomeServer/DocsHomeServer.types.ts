import { ILocale } from "@src/types/locale";

type IDocsHomeServerPlans = Record<
  "basic",
  {
    price: number;
    url: string;
  }
>;

export interface IDocsHomeServerTemplate {
  locale: ILocale["locale"];
  productsData: IDocsHomeServerPlans;
}
