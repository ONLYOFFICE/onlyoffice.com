import { Hero } from "./sections/Hero";
import { Ascensio } from "./sections/Ascensio";
import { People } from "./sections/People";
import { Features } from "./sections/Features";
import { Discover } from "./sections/Discover";
import { IAbouts } from "./About.types";
import { ILocale } from "@src/types/locale";

const AboutTemplate = ({ abouts, locale }: IAbouts & ILocale) => {
  return (
    <>
      <Hero />
      <Ascensio />
      <People />
      <Features />
      <Discover abouts={abouts} locale={locale} />
    </>
  );
};

export { AboutTemplate };