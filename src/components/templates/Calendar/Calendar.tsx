import { OtherPagesSelector } from "@src/components/modules/OtherPagesSelector";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";

const CalendarTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Quote />
      <OtherPagesSelector page={"collaboration"} />
    </>
  );
};

export { CalendarTemplate };
