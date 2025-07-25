import { Accept } from "./sections/Accept";
import { Ambassador } from "./sections/Ambassador";
import { Contribute } from "./sections/Contribute";
import { Faq } from "./sections/Faq";
import { Form } from "./sections/Form";
import { Hero } from "./sections/Hero";
import { Inspire } from "./sections/Inspire";
import { Monetize } from "./sections/Monetize";
import { WorkWithUs } from "./sections/WorkWithUs";

const InfluencerProgramTemplate = () => {
  return (
    <>
      <Hero />
      <Inspire />
      <WorkWithUs />
      <Accept />
      <Ambassador />
      <Monetize />
      <Faq />
      <Form />
      <Contribute />
    </>
  );
};

export { InfluencerProgramTemplate };
