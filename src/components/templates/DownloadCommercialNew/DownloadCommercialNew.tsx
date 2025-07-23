import { IDownloadCommercialNewTemplate } from "@src/components/templates/DownloadCommercialNew";
import { Hero } from "./sections/Hero";

const DownloadCommercialNewTemplate = ({
  docsEnterpriseProducts,
  docsDeveloperProducts,
  docspaceProducts,
}: IDownloadCommercialNewTemplate) => {
  return (
    <Hero
      docsEnterpriseProducts={docsEnterpriseProducts}
      docsDeveloperProducts={docsDeveloperProducts}
      docspaceProducts={docspaceProducts}
    />
  );
};

export { DownloadCommercialNewTemplate };
