import { ILocale } from "@src/types/locale";
import { FileFormats } from "./sections/FileFormats";
import { FreeApps } from "./sections/FreeApps";
import { Hero } from "./sections/Hero";
import { Productive } from "./sections/Productive";
import { Protect } from "./sections/Protect";
import { Seamlessly } from "./sections/Seamlessly";
import { StayOrganized } from "./sections/StayOrganized";
import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";

const DocumentManagementTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <StayOrganized />
      <FileFormats />
      <Seamlessly />
      <Protect />
      <Productive locale={locale} />
      <FreeApps />
      <OtherPagesSelector page={"collaboration"} />
    </>
  );
};

export { DocumentManagementTemplate };
