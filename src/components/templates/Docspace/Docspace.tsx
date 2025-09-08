import { Collaborate } from "./sections/Collaborate";
import { Content } from "./sections/Content";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Security } from "./sections/Security";
import { Budgets } from "./sections/Budgets";
import { RoomsGetStarted } from "@src/components/modules/rooms/RoomsGetStarted";
import { RoomsFaq } from "@src/components/modules/rooms/RoomsFaq";
import { LearnMore } from "./sections/LearnMore";
import { AwardsBanner } from "./sections/Awards";
import { ILocale } from "@src/types/locale";

const DocSpaceTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Collaborate />
      <Content />
      <Features locale={locale} />
      <Security />
      <Budgets />
      <AwardsBanner />
      <RoomsGetStarted background="white" />
      <LearnMore />
      <RoomsFaq />
    </>
  );
};

export { DocSpaceTemplate };
