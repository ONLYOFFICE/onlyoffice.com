import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

export interface IHero {
  communityProducts: IDownloadBlock[];
  bundlesWithOwnCloudProducts: IDownloadBlock[];
  bundlesWithNextcloudProducts: IDownloadBlock[];
  docspaceProducts: IDownloadBlock[];
}
