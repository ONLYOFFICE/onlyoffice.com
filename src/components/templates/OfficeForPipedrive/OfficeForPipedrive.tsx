import { Hero } from "./sections/Hero";
import { DocspaceApp } from "./sections/DocspaceApp";
import { DocsApp } from "./sections/DocsApp";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { Partner } from "./sections/Partner";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForPipedriveTemplate = () => {
  return (
    <>
      <Hero />
      <DocspaceApp />
      <MarketplaceConnector />
      <DocsApp />
      <Features />
      <HowToStart />
      <Partner />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForPipedriveTemplate };
