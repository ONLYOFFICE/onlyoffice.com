
import { GetStarted } from "@src/components/templates/Main/sections/GetStarted";
import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { SecurityFirst } from "@src/components/modules/SecurityFirst";
import {Features} from "./sections/Features";

const OfficeSuiteTemplate = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <SecurityFirst />
      <GetStarted />
    </>
  );
};


export { OfficeSuiteTemplate };


