import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Teamwork } from "./sections/Teamwork";
import { RoomTabs } from "@src/components/modules/RoomsModules/RoomTabs";
import { RoomsGetStarted } from "@src/components/modules/RoomsModules/RoomsGetStarted";
import { RoomsFaq } from "@src/components/modules/RoomsModules/RoomsFaq";

const CollaborationRoomsTemplate = () => {
  return (
    <>
      <Hero />
      <Teamwork />
      <Features />
      <RoomsGetStarted />
      <LearnMore />
      <RoomsFaq />
      <RoomTabs />
    </>
  );
};

export { CollaborationRoomsTemplate };
