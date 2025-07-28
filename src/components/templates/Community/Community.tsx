import { CollaborationsTabs } from "@src/components/modules/collaborations/CollaborationsTabs";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";

const CommunityTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Quote />
      <CollaborationsTabs />
    </>
  );
};

export { CommunityTemplate };
