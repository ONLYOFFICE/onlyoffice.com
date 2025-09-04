import { ILocale } from "@src/types/locale";
import { HowItWorks } from "./sections/DesktopEditors";
import { Faq } from "./sections/Faq";
import { Features } from "./sections/Features";
import { GettingStarted } from "./sections/GettingStarted/GettingStarted";
import { Hero } from "./sections/Hero";
import { PrivateBlock } from "./sections/PrivateBlock";
import { Protect } from "./sections/Protect";

const PrivateRoomsTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PrivateBlock />
      <GettingStarted
        locale={locale}
        download_url={
          "/images/templates/private-rooms/getting-started/onlyoffice_workspace_private_rooms.pdf"
        }
      />
      <Protect />
      <Faq />
    </>
  );
};

export { PrivateRoomsTemplate };
