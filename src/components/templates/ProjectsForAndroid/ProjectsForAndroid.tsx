import { Benefits } from "./sections/Benefits/Benefits";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { HowToStart } from "./sections/HowToStart";
import { ILocale } from "@src/types/locale";

const ProjectsForAndroidTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero locale={locale} />
      <Features />
      <HowToStart />
      <Benefits locale={locale}/>
    </>
  );
};

export { ProjectsForAndroidTemplate };
