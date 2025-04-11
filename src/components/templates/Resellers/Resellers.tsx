import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Conditions } from "./sections/Conditions";
import { PartnerLevels } from "./sections/PartnerLevels";
import { Market } from "./sections/Market";
import { LearnMore } from "./sections/LearnMore";
import { ReadyToShip } from "./sections/ReadyToShip";

const ResellersTemplate = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Conditions />
      <PartnerLevels />
      <Market />
      <LearnMore />
      <ReadyToShip />
    </>
  );
};

export { ResellersTemplate };
