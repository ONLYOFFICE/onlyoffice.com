import { ILocale } from "@src/types/locale";

type IDocsEnterprisePricesPlans = Record<
  | "basic1"
  | "basic2"
  | "basic3"
  | "plus1"
  | "plus2"
  | "plus3"
  | "premium1"
  | "premium2"
  | "premium3"
  | "basic3Years1"
  | "basic3Years2"
  | "basic3Years3"
  | "plus3Years1"
  | "plus3Years2"
  | "plus3Years3"
  | "premium3Years1"
  | "premium3Years2"
  | "premium3Years3"
  | "basicSupport1"
  | "basicSupport2"
  | "basicSupport3"
  | "plusSupport1"
  | "plusSupport2"
  | "plusSupport3"
  | "premiumSupport1"
  | "premiumSupport2"
  | "premiumSupport3"
  | "basic3YearsSupport1"
  | "basic3YearsSupport2"
  | "basic3YearsSupport3"
  | "plus3YearsSupport1"
  | "plus3YearsSupport2"
  | "plus3YearsSupport3"
  | "premium3YearsSupport1"
  | "premium3YearsSupport2"
  | "premium3YearsSupport3",
  {
    price: number;
    url: string;
  }
>;

export interface IDocsEnterprisePricesTemplate {
  locale: ILocale["locale"];
  productsData: IDocsEnterprisePricesPlans;
}
