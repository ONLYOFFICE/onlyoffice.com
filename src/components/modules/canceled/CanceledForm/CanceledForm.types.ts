import { ILocale } from "@src/types/locale";

export interface ICanceledFormData {
  checkboxes: string;
  mark1: string;
  mark2: string;
  mark3: string;
  mark4: string;
  mark5: string;
  mark6: string;
  message: string;
  email: string;
  from: string;
  spam: number;
  calls: number;
  hCaptchaResponse: string | null;
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
  apiUrl: string;
  checkboxeItems: ICheckboxeItem[];
  textareaHeading: string;
  onShowCoupons: () => void;
  isEmailRequired?: boolean;
  locale: ILocale["locale"];
}
