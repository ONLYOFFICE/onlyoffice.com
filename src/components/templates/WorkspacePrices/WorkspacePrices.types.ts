import { ILocale } from "@src/types/locale";

type IWorkspacePricesPlans = Record<
  | "basic50"
  | "basic100"
  | "basic200"
  | "plus50"
  | "plus100"
  | "plus200"
  | "premium50"
  | "premium100"
  | "premium200",
  {
    price: number;
    url: string;
  }
>;

export interface IWorkspacePricesTemplate {
  locale: ILocale["locale"];
  productsData: IWorkspacePricesPlans;
}
