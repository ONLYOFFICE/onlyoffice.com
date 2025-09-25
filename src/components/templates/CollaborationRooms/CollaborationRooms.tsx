import { Hero } from "./sections/Hero";
import { Teamwork } from "./sections/Teamwork";
import { Features } from "./sections/Features";
import { RoomsGetStarted } from "@src/components/modules/rooms/RoomsGetStarted";
import { LearnMore } from "./sections/LearnMore";
import { RoomsFaq } from "@src/components/modules/rooms/RoomsFaq";
import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";

const CollaborationRoomsTemplate = () => {
  return (
    <>
      <Hero />
      <Teamwork />
      <Features />
      <RoomsGetStarted />
      <LearnMore />
      <RoomsFaq />
      <OtherPagesSelector page={"rooms"} />
    </>
  );
};

export { CollaborationRoomsTemplate };
