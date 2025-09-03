import { ILocale } from "@src/types/locale";
import { Docs } from "./sections/Docs";
import { DocSpace } from "./sections/DocSpace";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { SuccessStories } from "./sections/SuccessStories";

const OfficeForEducatorsTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Docs />
      <DocSpace />
      <Features locale={locale} />
      <SuccessStories />
      <Faq locale={locale} />
    </>
  );
};

export { OfficeForEducatorsTemplate };
