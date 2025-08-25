import { IDownloadTemplate } from "./Download.types";
import { Hero } from "./sections/Hero";

const PartnershipRequestTemplate = ({
  locale,
}: IDownloadTemplate) => {
  return (
    <Hero
      locale={locale}
    />
  );
};

export { PartnershipRequestTemplate };
