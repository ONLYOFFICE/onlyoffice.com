import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { GetStarted } from "@src/components/modules/GetStarted";

const TextAnalysisAndWordCountTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF;" />
    </>
  );
};

export { TextAnalysisAndWordCountTemplate };
