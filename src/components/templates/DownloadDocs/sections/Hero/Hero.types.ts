import { ILocale } from "@src/types/locale";
import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

export interface IHero {
  locale: ILocale["locale"];
  enterpriseProducts: IDownloadBlock[];
  developerProducts: IDownloadBlock[];
  communityProducts: IDownloadBlock[];
  bundlesWithOwnCloudProducts: IDownloadBlock[];
  bundlesWithNextcloudProducts: IDownloadBlock[];
}
