import { Hero } from "./sections/Hero";
import { Connectors } from "./sections/Connectors";
import { Features } from "./sections/Features";
import { LeftTextImg } from "./sections/LeftTextImg";
import { Questions } from "./sections/Questions";
import { Blog } from "./sections/Blog";
import { ILocale } from "@src/types/locale";

const ForDevelopersTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Connectors />
      <Features />
      <LeftTextImg locale={locale} />
      <Questions />
      <Blog />
    </>
  );
};

export { ForDevelopersTemplate };
