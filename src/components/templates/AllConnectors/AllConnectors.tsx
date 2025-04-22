import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Connectors } from "./sections/Connectors";
import { ConnectApp } from "./sections/ConnectApp";

const AllConnectorsTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Connectors locale={locale} />
      <ConnectApp />
    </>
  );
};

export { AllConnectorsTemplate };
