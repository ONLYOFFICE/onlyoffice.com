import { Hero } from "./sections/Hero";
import { CurrentEvents } from "./sections/CurrentEvents";
import { PastEvents } from "./sections/PastEvents";
import { IEventsTemplate } from "./types";

const EventsTemplate = ({ events }: IEventsTemplate) => {
  return (
    <>
      <Hero />
      <CurrentEvents events={events} />
      <PastEvents events={events} />
    </>
  );
};

export { EventsTemplate };