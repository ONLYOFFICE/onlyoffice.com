import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Quote } from "./sections/Quote";
import { MobileApps } from "./sections/MobileApps";

const ProjectsTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <MobileApps />
      <Quote />
      <OtherPagesSelector page={"collaboration"} />
    </>
  );
};

export { ProjectsTemplate };
