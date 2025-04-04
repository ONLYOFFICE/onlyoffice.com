export interface IEventImage {
  id: number;
  url: string;
}

export interface IEvent {
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
  image: IEventImage[];
  image_2X: IEventImage[];
}

export interface IEventsTemplate {
  events: IEvent[] | null;
}
