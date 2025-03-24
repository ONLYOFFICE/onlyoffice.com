import { useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { StyledCurrentEvents } from "./СurrentEvents.styled";
import { Heading } from "@src/components/ui/Heading";

const formatEventDate = (startDate: string, t: any, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const month = t(start.toLocaleString('en-US', { month: 'long' }));
  const startDay = start.getDate();
  const year = start.getFullYear();
  
  if (!end) {
    return t("events:dateTemplates.singleDay", {
      day: startDay,
      month: month,
      year: year
    });
  }
  
  
  if (start.getFullYear() !== end.getFullYear()) {
    const endMonth = t(end.toLocaleString('en-US', { month: 'long' }));
    return t("events:dateTemplates.differentYears", {
      dayStart: startDay,
      monthStart: month,
      yearStart: start.getFullYear(),
      dayEnd: end.getDate(),
      monthEnd: endMonth,
      year: end.getFullYear()
    });
  }
  
  
  if (start.getMonth() !== end.getMonth()) {
    const endMonth = t(end.toLocaleString('en-US', { month: 'long' }));
    return t("events:dateTemplates.differentMonths", {
      dayStart: startDay,
      monthStart: month,
      dayEnd: end.getDate(),
      monthEnd: endMonth,
      year: year
    });
  }
  

  return t("events:dateTemplates.sameMonth", {
    dayStart: startDay,
    dayEnd: end.getDate(),
    month: month,
    year: year
  });
};

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

interface CurrentEventsProps {
  events: Event[] | null;
  locale: string;
}

const СurrentEvents = ({ events, locale }: CurrentEventsProps) => {
  const { t } = useTranslation(["events", "months"]);

  if (!events) {
    return (
      <StyledCurrentEvents>
        <Text label={t("events:noEvents")} color="main" />
      </StyledCurrentEvents>
    );
  }

  
  const currentEvents = events.filter(event => {
    if (!event.end_date) return true; 
    const endDate = new Date(event.end_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return endDate >= today;
  });

  if (currentEvents.length === 0) {
    return (
      <StyledCurrentEvents>
        <Text label={t("events:noEvents")} color="main" />
      </StyledCurrentEvents>
    );
  }

  return (
    <StyledCurrentEvents >      
      <div className="emt_events">
      <Text label={t("events:currentEvents")} color="main" className="emt_upcoming_heading"/>
        <div className="emt_upcoming_events">          
          
          {currentEvents.map((event) => {
            return (
              
                <div key={event.id} className="emt_event_block">
                  <Heading
                    level={2}
                    label={event.name}
                    className="emt_event_title"
                    size={4}
                  />
                  <div className="emt_date">
                    {formatEventDate(event.start_date, t, event.end_date)}
                    {event.start_time && ` ${event.start_time}`}
                    {event.end_time && ` ${event.end_time}`}
                  </div>
                  <div className="emt_place">{event.place}</div>
                  <div className="emt_description" dangerouslySetInnerHTML={{ __html: event.description }} style={{ backgroundImage: `url(${event.image[0].url})` }}/>
                  <div className="emt_links">
                    <div className="emt_link">
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        {t("events:moreInfo")}
                      </a>
                    </div>
                    <div className="emt_pastlink">
                      <a href={event.pastlink} target="_blank" rel="noopener noreferrer">
                        {t("events:scheduleMeeting")}
                      </a>
                    </div>
                  </div>
                </div>
              );
          })}
          </div>
      </div>
    </StyledCurrentEvents>
  );
};

export { СurrentEvents };
