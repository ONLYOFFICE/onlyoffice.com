import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { LearnMore } from "./sections/LearnMore";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForAlfrescoTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <MarketplaceConnector />
      <Features />
      <HowToStart />
      <LearnMore />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForAlfrescoTemplate };
