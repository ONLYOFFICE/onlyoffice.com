import { ILocale } from "@src/types/locale";
import { TFunction } from "i18next";

export interface IEditorsTab {
  /** The unique identifier. */
  id: string;
  /** The tab href */
  url: string;
  /** The tab label */
  label: string;
}

export interface IEditorsTabsProps extends ILocale {
  items: IEditorsTab[];
  t: TFunction;
  className?: string;
}
