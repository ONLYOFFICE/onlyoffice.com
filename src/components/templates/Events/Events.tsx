import { Hero } from "./sections/Hero";
import { CurrentEvents } from "./sections/CurrentEvents";
import { PastEvents } from "./sections/PastEvents";

interface EventImage {
  id: number;
  url: string;
}

interface Event {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  start_time: string | null;
  end_time: string | null;
  place: string;
  description: string;
  link: string;
  pastlink: string;
  image: EventImage[];
  image_2X: EventImage[];
}

interface EventsTemplateProps {
  events: Event[] | null;
}

const EventsTemplate = ({ events }: EventsTemplateProps) => {
  return (
    <>
      <Hero />
      <CurrentEvents events={events} />
      <PastEvents events={events} />
    </>
  );
};

export { EventsTemplate };