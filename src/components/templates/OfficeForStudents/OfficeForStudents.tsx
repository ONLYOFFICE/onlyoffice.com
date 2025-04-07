import { Hero } from "./sections/Hero";
import { DesktopEditors } from "./sections/DesktopEditors";
import { DocSpace } from "./sections/DocSpace";
import { Features } from "./sections/Features";
import { SuccessStories } from "./sections/SuccessStories";
import { Faq } from "./sections/Faq";

const OfficeForStudentsTemplate = () => {
  return (
    <>
      <Hero />
      <DesktopEditors />
      <DocSpace />
      <Features />
      <SuccessStories />
      <Faq />
    </>
  );
};

export { OfficeForStudentsTemplate };
