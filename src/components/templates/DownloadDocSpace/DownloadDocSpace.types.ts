import { ILocale } from "@src/types/locale";
import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

export interface IDownloadDocSpaceTemplate {
  locale: ILocale["locale"];
  enterpriseProducts: IDownloadBlock[];
  communityProducts: IDownloadBlock[];
}
