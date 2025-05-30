import { Hero } from "./sections/Hero";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";

const OfficeForRedmineTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <MarketplaceConnector />
      <HowToStart />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForRedmineTemplate };
