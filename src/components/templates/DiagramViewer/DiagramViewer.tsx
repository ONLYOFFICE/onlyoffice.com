import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { GetStart } from "./sections/GetStart";
import { Hero } from "./sections/Hero";

const DiagramViewerTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <GetStart />
      <Faq />
    </>
  );
};

export { DiagramViewerTemplate };
