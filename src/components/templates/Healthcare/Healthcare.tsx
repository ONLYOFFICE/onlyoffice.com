import { Benefits } from "./sections/Benefits";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Marketplace } from "./sections/Marketplace";
import { Quote } from "./sections/Quote";
import { UserTypes } from "./sections/UserTypes";
import { Partners } from "./sections/Partners";

const HealthcareTemplate = () => {
  return (
    <>
      <Hero />
      <Partners />
      <UserTypes />
      <Quote />
      <Benefits />
      <Marketplace />
      <Contact />
    </>
  );
};

export { HealthcareTemplate };
