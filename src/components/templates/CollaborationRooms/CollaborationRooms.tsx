import { RoomTabs } from "@src/components/modules/RoomTabs";
import { Features } from "./sections/Features";
import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Teamwork } from "./sections/Teamwork";
import { Faq } from "./sections/Faq";

const CollaborationRooms = () => {
  return (
    <>
      <Hero />
      <Teamwork />
      <Features />
      <GetStarted />
      <LearnMore />
      <Faq />
      <RoomTabs />
    </>
  );
};

export { CollaborationRooms };
