import { FileFormats } from "./sections/FileFormats";
import { FreeApps } from "./sections/FreeApps";
import { Hero } from "./sections/Hero";
import { Productive } from "./sections/Productive";
import { Protect } from "./sections/Protect";
import { Seamlessly } from "./sections/Seamlessly";
import { StayOrganized } from "./sections/StayOrganized";
import { CollaborationsTabs } from "@src/components/modules/collaborations/CollaborationsTabs";

const DocumentManagementTemplate = () => {
  return (
    <>
      <Hero />
      <StayOrganized />
      <FileFormats />
      <Seamlessly />
      <Protect />
      <Productive />
      <FreeApps />
      <CollaborationsTabs />
    </>
  );
};

export { DocumentManagementTemplate };
