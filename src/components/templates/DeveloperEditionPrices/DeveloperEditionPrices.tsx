import { IDeveloperEditionPricesTemplate } from "@src/components/templates/DeveloperEditionPrices";
import { Hero } from "./sections/Hero";
import { Faq } from "@src/components/modules/pricing/for-developers/Faq";

const DeveloperEditionPricesTemplate = ({
  locale,
  productsData,
}: IDeveloperEditionPricesTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { DeveloperEditionPricesTemplate };
