import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForZapierTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <Features />
      <MarketplaceConnector />
      <HowToStart />
      <OtherConnectors />
    </>
  );
};

export { OfficeForZapierTemplate };
