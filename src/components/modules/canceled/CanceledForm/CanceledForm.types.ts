import { ILocale } from "@src/types/locale";

export interface ICanceledFormData {
  checkboxes: string;
  mark1: number;
  mark2: number;
  mark3: number;
  mark4: number;
  mark5: number;
  mark6: number;
  message: string;
  email: string;
  from: string;
  spam: number;
  calls: number;
  recaptchaResponse: string | null;
  table_name: string;
}

export type TMarkKeys =
  | "mark1"
  | "mark2"
  | "mark3"
  | "mark4"
  | "mark5"
  | "mark6";

export interface ICheckboxeItem {
  id: string;
  label: string;
  mark: TMarkKeys;
}

export interface CanceledFormProps {
  tableName: string;
  checkboxeItems: ICheckboxeItem[];
  textareaHeading: string;
  onShowCoupons: () => void;
  locale: ILocale["locale"];
}
