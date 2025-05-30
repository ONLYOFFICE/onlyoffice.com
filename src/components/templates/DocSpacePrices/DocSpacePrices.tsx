import { IDocSpacePricesTemplate } from "./DocSpacePrices.types";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";

const DocSpacePricesTemplate = ({
  locale,
  productsData,
}: IDocSpacePricesTemplate) => {
  return (
    <>
      <Hero locale={locale} productsData={productsData} />
      <Faq />
    </>
  );
};

export { DocSpacePricesTemplate };
