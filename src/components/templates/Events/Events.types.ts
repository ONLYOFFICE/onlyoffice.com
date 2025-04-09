interface IEventImage {
  id: number;
  url: string;
}

export interface IEvent {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  place: string;
  description: string;
  link: string;
  image: IEventImage[];
  image_2X: IEventImage[];
}

export interface IEvents {
  events: { upcoming: { data: IEvent[] }; past: { data: IEvent[] } };
}
