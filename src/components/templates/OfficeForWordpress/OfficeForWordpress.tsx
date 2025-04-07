import { Hero } from "./sections/Hero";
import { DocsApp } from "./sections/DocsApp";
import { Website } from "./sections/Website";
import { Account } from "./sections/Account";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/OtherConnectors";

const OfficeForWordpressTemplate = () => {
  return (
    <>
      <Hero />
      <Website />
      <Account />
      <MarketplaceConnector />
      <DocsApp />
      <Features />
      <HowToStart />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForWordpressTemplate };
