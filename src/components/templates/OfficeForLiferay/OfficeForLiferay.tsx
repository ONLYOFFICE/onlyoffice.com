import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { FreeApps } from "./sections/FreeApps";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForLiferayTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <FreeApps />
      <MarketplaceConnector />
      <Features />
      <HowToStart />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForLiferayTemplate };
