import { Hero } from "./sections/Hero";
import { Ascensio } from "./sections/Ascensio";
import { People } from "./sections/People";
import { Features } from "./sections/Features";
import { Discover } from "./sections/Discover";

const AboutTemplate = () => {
  return (
    <>
      <Hero />
      <Ascensio />
      <People />
      <Features />
      <Discover />
    </>
  );
};

export { AboutTemplate };