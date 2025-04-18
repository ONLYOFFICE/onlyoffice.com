import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Faq } from "./sections/Faq";

const DocsEnterprisePricesTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero locale={locale} />
      <Faq />
    </>
  );
};

export { DocsEnterprisePricesTemplate };
