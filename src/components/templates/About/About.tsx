import { Hero } from "./sections/Hero";
import { Ascensio } from "./sections/Ascensio";
import { People } from "./sections/People";
import { Features } from "./sections/Features";
import { Discover } from "./sections/Discover";
import { IAbouts } from "./About.types";

const AboutTemplate = ({ abouts }: IAbouts) => {
  return (
    <>
      <Hero />
      <Ascensio />
      <People />
      <Features />
      <Discover abouts={abouts} />
    </>
  );
};

export { AboutTemplate };