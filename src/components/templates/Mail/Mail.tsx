import { CollaborationsTabs } from "@src/components/modules/collaborations/CollaborationsTabs";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Quote } from "./sections/Quote";

const MailTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Quote />
      <CollaborationsTabs />
    </>
  );
};

export { MailTemplate };
