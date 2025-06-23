import { Hero } from "./sections/Hero";
import { Ascensio } from "./sections/Ascensio";
import { People } from "./sections/People";

const AboutTemplate = () => {
  return (
    <>
      <Hero />
      <Ascensio />
      <People />
    </>
  );
};

export { AboutTemplate };