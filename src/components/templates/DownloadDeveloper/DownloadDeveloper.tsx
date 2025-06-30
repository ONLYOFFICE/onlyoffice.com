import { IDownloadTemplate } from "@src/components/templates/Download";
import { Hero } from "./sections/Hero";

const DownloadDeveloperTemplate = ({
  locale,
  docsProducts,
  docspaceProducts,
}: IDownloadTemplate) => {
  return (
    <Hero
      locale={locale}
      docsProducts={docsProducts}
      docspaceProducts={docspaceProducts}
    />
  );
};

export { DownloadDeveloperTemplate };
