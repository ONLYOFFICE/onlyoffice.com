import { Hero } from "./sections/Hero";
import { CurrentEvents } from "./sections/CurrentEvents";
import { PastEvents } from "./sections/PastEvents";
import { IEvents } from "./Events.types";

const EventsTemplate = ({ events }: IEvents) => {
  return (
    <>
      <Hero />
      <CurrentEvents events={events} />
      <PastEvents events={events} />
    </>
  );
};

export { EventsTemplate };
