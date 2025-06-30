import { IWorkspacePricesTemplate } from "./WorkspacePrices.types";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const WorkspacePricesTemplate = ({
  locale,
  productsData,
}: IWorkspacePricesTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { WorkspacePricesTemplate };
