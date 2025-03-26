import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { RoomGetStarted } from "@src/components/modules/room/RoomGetStarted";
import { LearnMore } from "./sections/LearnMore";
import { RoomFaq } from "@src/components/modules/room/RoomFaq";
import { RoomTabs } from "@src/components/modules/room/RoomTabs";

const VirtualDataRoomsTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <RoomGetStarted />
      <LearnMore />
      <RoomFaq />
      <RoomTabs />
    </>
  );
};

export { VirtualDataRoomsTemplate };
