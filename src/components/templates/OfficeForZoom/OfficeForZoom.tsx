import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { Manage } from "./sections/Manage";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";

const OfficeForZoomTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <Manage />
      <MarketplaceConnector />
      <Features />
      <HowToStart />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForZoomTemplate };
