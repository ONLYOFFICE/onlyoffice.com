import { Hero } from "./sections/Hero";
import { Documents } from "./sections/Documents";
import { FreeApps } from "./sections/FreeApps";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { Partner } from "./sections/Partner";
import { LearnMore } from "./sections/LearnMore";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";

const OfficeForNextcloudTemplate = () => {
  return (
    <>
      <Hero />
      <Documents />
      <FreeApps />
      <MarketplaceConnector />
      <Features />
      <HowToStart />
      <Partner />
      <LearnMore />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForNextcloudTemplate };
