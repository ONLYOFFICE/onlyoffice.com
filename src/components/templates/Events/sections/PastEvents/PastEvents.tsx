import { useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { StyledPastEvents, StyledMoreLink } from "./PastEvents.styled";
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

interface PastEventsProps {
  events: Event[] | null;
  locale: string;
}

const PastEvents = ({ events, locale }: PastEventsProps) => {
  const { t } = useTranslation(["events", "months"]);

  if (!events) {
    return (
      <StyledPastEvents>
        <Text label={t("events:noPastEvents")} color="main" />
      </StyledPastEvents>
    );
  }

  
  const pastEvents = events.filter(event => {
    if (!event.end_date) return false; 
    const endDate = new Date(event.end_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return endDate < today;
  });

  if (pastEvents.length === 0) {
    return (
      <StyledPastEvents>
        <Text label={t("events:noPastEvents")} color="main" />
      </StyledPastEvents>
    );
  }

  return (
    <StyledPastEvents>            
      <div className="past_events_wrapper">
        <Text label={t("events:pastEvents")} color="#666666" className="emt_past_events_title"/>
        <div className="emtPastEvents">
        <div className="emt_past_events">
          {pastEvents.map((event) => (
            <div key={event.id} className="emt_event_block">
              <Heading
                level={2}
                label={event.name}
                className="emt_event_title"
              />
              <div className="emt_date">
                {formatEventDate(event.start_date, t, event.end_date)}
                {event.start_time && ` ${event.start_time}`}
                {event.end_time && ` ${event.end_time}`}
              </div>
              <div className="emt_place">{event.place}</div> 
              {event.pastlink && (
                <div className="emt_past_link">
                  <StyledMoreLink 
                    href={event.pastlink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    imageUrl={event.image?.[0]?.url}
                    color="main"
                  >
                    {t("events:moreInfo")}
                  </StyledMoreLink>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </StyledPastEvents>
  );
};

export { PastEvents };
