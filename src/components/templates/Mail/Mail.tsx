import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Quote } from "./sections/Quote";

const MailTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Quote />
      <OtherPagesSelector page={"collaboration"} />
    </>
  );
};

export { MailTemplate };
