import { ILocale } from "@src/types/locale";
import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";
import { Manage } from "./sections/Manage";
import { Video } from "./sections/Video";
import { WhyOOWorkspace } from "./sections/WhyOOWorkspace";

const WorkspaceTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Manage />
      <Video />
      <WhyOOWorkspace locale={locale} />
      <GetStarted />
    </>
  );
};

export { WorkspaceTemplate };
