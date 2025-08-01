import { CollaborationsTabs } from "@src/components/modules/collaborations/CollaborationsTabs";
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
      <CollaborationsTabs />
    </>
  );
};

export { ProjectsTemplate };
