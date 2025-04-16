import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const DeveloperEditionPricesTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero locale={locale} />
      <Faq />
    </>
  );
};

export { DeveloperEditionPricesTemplate };
