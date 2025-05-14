import { IDocsEnterprisePricesTemplate } from "@src/components/templates/DocsEnterprisePrices";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const DocsEnterprisePricesTemplate = ({
  locale,
  productsData,
}: IDocsEnterprisePricesTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { DocsEnterprisePricesTemplate };
