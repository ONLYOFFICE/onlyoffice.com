import { Authentication } from "./sections/Authentication/Authentication";
import { Backup } from "./sections/Backup/Backup";
import { Bug } from "./sections/Bug/Bug";
import { Compliance } from "./sections/Compliance/Compliance";
import { Encryption } from "./sections/Encryption/Encryption";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Protection } from "./sections/Protection/Protection";
import { SelfHosting } from "./sections/SelfHosting/SelfHosting";

const SecurityTemplate = () => {
  return (
    <>
      <Hero />
      <Compliance />
      <SelfHosting />
      <Encryption />
      <Protection />
      <Authentication />
      <Backup />
      <Bug />
      <LearnMore />
      <Faq />
    </>
  );
};

export { SecurityTemplate };
