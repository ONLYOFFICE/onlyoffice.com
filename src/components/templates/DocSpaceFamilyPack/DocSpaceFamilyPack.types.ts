import { ILocale } from "@src/types/locale";

type IDocSpaceFamilyPackPlans = Record<
  "basic",
  {
    price: number;
    url: string;
  }
>;

export interface IDocSpaceFamilyPackTemplate {
  locale: ILocale["locale"];
  productsData: IDocSpaceFamilyPackPlans;
}
