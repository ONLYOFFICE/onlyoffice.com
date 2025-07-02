import { ILocale } from "@src/types/locale";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";

export interface IHero {
  locale: ILocale["locale"];
  desktopProducts: IHeroProducts[];
  mobileProducts: IHeroProducts[];
}

export interface IHeroNavData {
  id: string;
  label: string;
}

export interface IHeroProducts {
  id: string;
  heading: string;
  text?: string;
  items: IDownloadCard[];
}
