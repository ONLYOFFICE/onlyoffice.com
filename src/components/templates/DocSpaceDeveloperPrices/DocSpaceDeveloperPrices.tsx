import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Faq } from "@src/components/modules/pricing/for-developers/Faq";

const DocSpaceDeveloperPricesTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero locale={locale} />
      <Faq />
    </>
  );
};

export { DocSpaceDeveloperPricesTemplate };
