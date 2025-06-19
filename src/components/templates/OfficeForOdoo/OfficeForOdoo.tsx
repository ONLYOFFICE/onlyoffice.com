import { Hero } from "./sections/Hero";
import { FillableForm } from "./sections/FillableForm";
import { Enterprise } from "./sections/Enterprise";
import { Community } from "./sections/Community";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { Partner } from "./sections/Partner";
import { LearnMore } from "./sections/LearnMore";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";

const OfficeForOdooTemplate = () => {
  return (
    <>
      <Hero />
      <FillableForm />
      <Enterprise />
      <Community />
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

export { OfficeForOdooTemplate };
