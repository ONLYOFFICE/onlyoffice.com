import { ILocale } from "@src/types/locale";

export interface IHeader {
  locale: ILocale["locale"];
  theme?: "white";
  highlight?: { buttonId?: string; linkId?: string };
  borderColor?: string;
  backgroundColor?: string;
  onScrollBorderColor?: string;
  onScrollBackgroundColor?: string;
  onScrollChangeTheme?: boolean;
}
