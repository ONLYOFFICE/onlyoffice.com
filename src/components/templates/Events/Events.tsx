import { Hero } from "./sections/Hero";
import { СurrentEvents } from "./sections/СurrentEvents";
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
  locale: string;
}

const EventsTemplate = ({ events, locale }: EventsTemplateProps) => {
  return (
    <>
      <Hero />
      <СurrentEvents events={events} locale={locale} />
      <PastEvents events={events} locale={locale} />
    </>
  );
};

export { EventsTemplate };