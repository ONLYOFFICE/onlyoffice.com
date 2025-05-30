import { ILocale } from "@src/types/locale";

type IDeveloperEditionPricesPlans = Record<
  "basicCloud" | "basicOnPremises" | "plusOnPremises" | "premiumOnPremises",
  {
    price: number;
    url: string;
  }
>;

export interface IDeveloperEditionPricesTemplate {
  locale: ILocale["locale"];
  productsData: IDeveloperEditionPricesPlans;
}
