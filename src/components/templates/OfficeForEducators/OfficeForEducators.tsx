import { Docs } from "./sections/Docs";
import { DocSpace } from "./sections/DocSpace";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { SuccessStories } from "./sections/SuccessStories";

const OfficeForEducatorsTemplate = () => {
  return (
    <>
      <Hero />
      <Docs />
      <DocSpace />
      <Features />
      <SuccessStories />
      <Faq />
    </>
  );
};

export { OfficeForEducatorsTemplate };
