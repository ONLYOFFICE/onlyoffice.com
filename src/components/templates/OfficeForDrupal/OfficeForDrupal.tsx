import { useState } from "react";
import { Hero } from "./sections/Hero";
import { DocsApp } from "./sections/DocsApp";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";
import { DocSpaceApp } from "./sections/DocSpaceApp";

const OfficeForDrupalTemplate = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Hero />
      <DocSpaceApp />
      <MarketplaceConnector />
      <DocsApp setActiveTab={setActiveTab} />
      <Features />
      <HowToStart activeTab={activeTab} />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForDrupalTemplate };
