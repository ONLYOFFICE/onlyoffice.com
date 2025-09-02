import { Hero } from "./sections/Hero";
import { DesktopEditors } from "./sections/DesktopEditors";
import { DocSpace } from "./sections/DocSpace";
import { Features } from "./sections/Features";
import { SuccessStories } from "./sections/SuccessStories";
import { Faq } from "./sections/Faq";
import { ILocale } from "@src/types/locale";

const OfficeForStudentsTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <DesktopEditors />
      <DocSpace />
      <Features locale={locale} />
      <SuccessStories />
      <Faq locale={locale} />
    </>
  );
};

export { OfficeForStudentsTemplate };
