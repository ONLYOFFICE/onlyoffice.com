import { ILocale } from "@src/types/locale";
import { IHeroProducts } from "@src/components/templates/DownloadDesktop/sections/Hero";

export interface IDownloadDesktopTemplate {
  locale: ILocale["locale"];
  desktopProducts: IHeroProducts[];
  mobileProducts: IHeroProducts[];
}
