import { Blogs } from "./sections/Blogs";
import { Conditions } from "./sections/Conditions";
import { Hero } from "./sections/Hero";
import { Market } from "./sections/Market";
import { PartnerLevels } from "./sections/PartnerLevels";
import { Portfolio } from "./sections/Portfolio";
import { ReadyToShip } from "./sections/ReadyToShip";

const ResellersTemplate = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Conditions />
      <PartnerLevels />
      <Market />
      <Blogs />
      <ReadyToShip />
    </>
  );
};

export { ResellersTemplate };
