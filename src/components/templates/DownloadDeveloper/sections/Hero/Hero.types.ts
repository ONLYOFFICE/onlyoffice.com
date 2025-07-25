import { ILocale } from "@src/types/locale";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";

export interface IHero {
  locale: ILocale["locale"];
  docsProducts: IDownloadCard[];
  docspaceProducts: IDownloadCard[];
}
