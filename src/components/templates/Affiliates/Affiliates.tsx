import React from "react";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { HowToStart } from "./sections/HowToStart";
import { UsefulInfo } from "./sections/UsefulInfo";

const AffiliatesTemplate = () => {
  return (
    <>
      <Hero />
      <Reasons />
      <HowToStart />
      <UsefulInfo />
    </>
  );
};

export { AffiliatesTemplate };
