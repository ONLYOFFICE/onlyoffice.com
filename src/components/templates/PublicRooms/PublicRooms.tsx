import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { RoomTabs } from "@src/components/modules/RoomsModules/RoomTabs";
import { RoomsGetStarted } from "@src/components/modules/RoomsModules/RoomsGetStarted";
import { RoomsFaq } from "@src/components/modules/RoomsModules/RoomsFaq";
import { LearnMore } from "./sections/LearnMore";

const PublicRoomsTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <RoomsGetStarted />
      <LearnMore />
      <RoomsFaq />
      <RoomTabs />
    </>
  );
};

export { PublicRoomsTemplate };
