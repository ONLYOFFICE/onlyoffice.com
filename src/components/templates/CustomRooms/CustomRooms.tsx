import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { RoomsGetStarted } from "@src/components/modules/rooms/RoomsGetStarted";
import { LearnMore } from "./sections/LearnMore";
import { RoomsFaq } from "@src/components/modules/rooms/RoomsFaq";
import { RoomsTabs } from "@src/components/modules/rooms/RoomsTabs";

interface CustomRoomsTemplateProps {
  locale?: string;
}

const CustomRoomsTemplate = ({ locale }: CustomRoomsTemplateProps) => {
  return (
    <>
      <Hero locale={locale} />
      <Features />
      <RoomsGetStarted />
      <LearnMore />
      <RoomsFaq />
      <RoomsTabs />
    </>
  );
};

export { CustomRoomsTemplate };
