import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { GetStarted } from "@src/components/modules/GetStarted";
import { Faq } from "./sections/Faq";
import { OtherEditors } from "@src/components/modules/OtherEditors";

const DiagramViewerTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted background="#F5F5F5" />
      <Faq />
      <OtherEditors />
    </>
  );
};

export { DiagramViewerTemplate };
