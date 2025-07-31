import { ILocale } from "@src/types/locale";

type IDocSpacePricesPlans = Record<
  | "business"
  | "enterpriseUsers100"
  | "enterpriseUsers250"
  | "enterpriseUsers500"
  | "enterpriseUsers1000",
  {
    price: number;
    url: string;
  }
>;

export interface IDocSpacePricesTemplate {
  locale: ILocale["locale"];
  productsData: IDocSpacePricesPlans;
}
