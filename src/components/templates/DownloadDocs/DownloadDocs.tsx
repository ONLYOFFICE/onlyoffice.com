import { IDownloadDocsTemplate } from "@src/components/templates/DownloadDocs";
import { Hero } from "./sections/Hero";

const DownloadDocsTemplate = ({
  locale,
  enterpriseProducts,
  developerProducts,
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
}: IDownloadDocsTemplate) => {
  return (
    <Hero
      locale={locale}
      enterpriseProducts={enterpriseProducts}
      developerProducts={developerProducts}
      communityProducts={communityProducts}
      bundlesWithOwnCloudProducts={bundlesWithOwnCloudProducts}
      bundlesWithNextcloudProducts={bundlesWithNextcloudProducts}
    />
  );
};

export { DownloadDocsTemplate };
