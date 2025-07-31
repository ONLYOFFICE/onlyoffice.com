import { ILocale } from "@src/types/locale";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";

export interface IDownloadDeveloperTemplate {
  locale: ILocale["locale"];
  docsProducts: IDownloadCard[];
  docspaceProducts: IDownloadCard[];
}
