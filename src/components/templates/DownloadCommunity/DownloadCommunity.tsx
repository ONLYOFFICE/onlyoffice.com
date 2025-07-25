import { Hero } from "./sections/Hero";
import { IDownloadCommunityTemplate } from "./DownloadCommunity.types";

const DownloadCommunityTemplate = ({
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
  docspaceProducts,
}: IDownloadCommunityTemplate) => {
  return (
    <Hero
      communityProducts={communityProducts}
      bundlesWithOwnCloudProducts={bundlesWithOwnCloudProducts}
      bundlesWithNextcloudProducts={bundlesWithNextcloudProducts}
      docspaceProducts={docspaceProducts}
    />
  );
};

export { DownloadCommunityTemplate };
