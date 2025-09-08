import { Hero } from "./sections/Hero";
import { Video } from "@src/components/templates/Workspace/sections/Video";
import { GettingStarted } from "./sections/GettingStarted";
import { Users } from "./sections/Users";
import { Features } from "./sections/Features";
import { Scalable } from "./sections/Scalable";
import { Support } from "./sections/Support";
import { Flexible } from "./sections/Flexible";
import { SecurityFeatures } from "./sections/Security";
import { Platform } from "./sections/Platform";

const WorkspaceEnterpriseTemplate = () => {
  return (
    <>
      <Hero />
      <Users />
      <Platform />
      <Video bg="#f5f5f5" />
      <Features />
      <SecurityFeatures />
      <Flexible />
      <Scalable />
      <Support />
      <GettingStarted />
    </>
  );
};

export { WorkspaceEnterpriseTemplate };
