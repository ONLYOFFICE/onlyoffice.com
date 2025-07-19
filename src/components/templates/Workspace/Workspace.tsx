import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";
import { Manage } from "./sections/Manage";
import { Video } from "./sections/Video";
import { WhyOOWorkspace } from "./sections/WhyOOWorkspace";

const WorkspaceTemplate = () => {
  return (
    <>
      <Hero />
      <Manage />
      <Video />
      <WhyOOWorkspace />
      <GetStarted />
    </>
  );
};

export { WorkspaceTemplate };
