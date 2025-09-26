import { ILocale } from "@src/types/locale";

export interface IPricingPlan extends ILocale {
  active?: boolean;
  heading: string;
  price?: number | null;
  url?: string;
  numberOfUsers: "50" | "100" | "200" | "more";
  setNumberOfUsers: (value: string) => void;
  availableList: string[];
  firstResponseTime: string;
  supportList: string[];
  casesList: string[];
  caption?: string;
  planKey: "basic" | "plus" | "premium";
}
