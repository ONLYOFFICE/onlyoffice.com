import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { GetStarted } from "@src/components/modules/GetStarted";
import { LearnMore } from "./sections/LearnMore";
import { Faq } from "./sections/Faq";
import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";
import { ILocale } from "@src/types/locale";

const DocumentEditorTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Features locale={locale} />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF;" />
      <LearnMore />
      <Faq />
      <OtherPagesSelector page={"editors"} withImage={true} withTitle={true} />
    </>
  );
};

export { DocumentEditorTemplate };
