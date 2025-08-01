import { IDownloadDocSpaceTemplate } from "./DownloadDocSpace.types";
import { Hero } from "./sections/Hero";

const DownloadDocSpaceTemplate = ({
  locale,
  enterpriseProducts,
  communityProducts,
}: IDownloadDocSpaceTemplate) => {
  return (
    <Hero
      locale={locale}
      enterpriseProducts={enterpriseProducts}
      communityProducts={communityProducts}
    />
  );
};

export { DownloadDocSpaceTemplate };
