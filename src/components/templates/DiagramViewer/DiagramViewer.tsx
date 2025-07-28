import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { GetStarted } from "@src/components/modules/GetStarted";
import { Faq } from "./sections/Faq";

const DiagramViewerTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted background="#F5F5F5" />
      <Faq />
    </>
  );
};

export { DiagramViewerTemplate };
