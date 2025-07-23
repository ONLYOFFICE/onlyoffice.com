import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

export interface IDownloadCommunityTemplate {
  communityProducts: IDownloadBlock[];
  bundlesWithOwnCloudProducts: IDownloadBlock[];
  bundlesWithNextcloudProducts: IDownloadBlock[];
  docspaceProducts: IDownloadBlock[];
}
