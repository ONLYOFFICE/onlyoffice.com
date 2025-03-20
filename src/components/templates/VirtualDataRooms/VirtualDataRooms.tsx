
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { RoomsGetStarted } from "@src/components/modules/RoomsModules/RoomsGetStarted";
import { LearnMore } from "./sections/LearnMore";
import { RoomsFaq } from "@src/components/modules/RoomsModules/RoomsFaq";
import { RoomTabs } from "@src/components/modules/RoomsModules/RoomTabs";

const VirtualDataRoomsTemplate = () => {
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

export { VirtualDataRoomsTemplate };
