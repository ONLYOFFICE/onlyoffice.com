import { useState } from "react";
import { Hero } from "./sections/Hero";
import { DocSpaceApp } from "./sections/DocspaceApp";
import { DocsApp } from "./sections/DocsApp";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { Partner } from "./sections/Partner";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";

const OfficeForPipedriveTemplate = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Hero />
      <DocSpaceApp setActiveTab={setActiveTab} />
      <MarketplaceConnector />
      <DocsApp setActiveTab={setActiveTab} />
      <Features />
      <HowToStart activeTab={activeTab} />
      <Partner />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForPipedriveTemplate };
