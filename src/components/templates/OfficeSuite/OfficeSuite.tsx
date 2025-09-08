import { GetStarted } from "@src/components/modules/GetStarted";
import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { SecurityFirst } from "@src/components/modules/SecurityFirst";
import { Features } from "./sections/Features";
import { ILocale } from "@src/types/locale";

const OfficeSuiteTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Partners />
      <Features locale={locale} />
      <SecurityFirst />
      <GetStarted />
    </> 
  );
};

export { OfficeSuiteTemplate };
