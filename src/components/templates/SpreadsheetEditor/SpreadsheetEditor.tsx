import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { GetStarted } from "@src/components/modules/GetStarted";
import { LearnMore } from "./sections/LearnMore";
import { Faq } from "./sections/Faq";
import { OtherEditors } from "@src/components/modules/OtherEditors";

const SpreadsheetEditorTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF;" />
      <LearnMore />
      <Faq />
      <OtherEditors />
    </>
  );
};

export { SpreadsheetEditorTemplate };
