import { Hero } from "./sections/Hero";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { Features } from "./sections/Features";
import { HowToStart } from "./sections/HowToStart";
import { ConnectApp } from "./sections/ConnectApp";
import { OtherConnectors } from "@src/components/modules/connectors/OtherConnectors";
import { ILocale } from "@src/types/locale";

const OfficeForNuxeoTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <MarketplaceConnector />
      <Features locale={locale} />
      <HowToStart />
      <ConnectApp />
      <OtherConnectors />
    </>
  );
};

export { OfficeForNuxeoTemplate };
