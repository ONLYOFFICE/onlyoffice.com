import { useTranslation, TFunction } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { 
  StyledCurrentEvents,
  EmtEvents,
  EmtUpcomingHeading,
  EmtUpcomingEvents,
  EmtEventBlock,
  EmtEventTitle,
  EmtDate,
  EmtPlace,
  EmtDescription,
  EmtLinks,
  EmtLink,
  EmtPastLink
} from "./CurrentEvents.styled";
import { Heading } from "@src/components/ui/Heading";

const getMonthKey = (date: Date): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[date.getMonth()];
};

const formatEventDate = (startDate: string, t: TFunction, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const month = t(`events:months.${getMonthKey(start)}`);
  const startDay = start.getDate();
  const year = start.getFullYear();
  
  if (!end) {
    return t("events:dateTemplates.singleDay", {
      day: startDay,
      month: month,
      year: year
    });
  }

  const endMonth = t(`events:months.${getMonthKey(end)}`);
  const endDay = end.getDate();
  const endYear = end.getFullYear();

  if (year !== endYear) {
    return t("events:dateTemplates.differentYears", {
      dayStart: startDay,
      monthStart: month,
      yearStart: year,
      dayEnd: endDay,
      monthEnd: endMonth,
      year: endYear
    });
  }

  if (start.getMonth() !== end.getMonth()) {
    return t("events:dateTemplates.differentMonths", {
      dayStart: startDay,
      monthStart: month,
      dayEnd: endDay,
      monthEnd: endMonth,
      year: year
    });
  }

  return t("events:dateTemplates.sameMonth", {
    dayStart: startDay,
    dayEnd: endDay,
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
}

const CurrentEvents = ({ events }: CurrentEventsProps) => {
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
    <StyledCurrentEvents>      
      <EmtEvents>
        <EmtUpcomingHeading>
          <Text label={t("events:currentEvents")} color="main" />
        </EmtUpcomingHeading>
        <EmtUpcomingEvents>          
          {currentEvents.map((event) => (
            <EmtEventBlock key={event.id}>
              <EmtEventTitle>
                <Heading
                  level={2}
                  label={event.name}
                  size={4}
                />
              </EmtEventTitle>
              <EmtDate>
                {formatEventDate(event.start_date, t, event.end_date)}
                {event.start_time && ` ${event.start_time}`}
                {event.end_time && ` ${event.end_time}`}
              </EmtDate>
              <EmtPlace>{event.place}</EmtPlace>
              <EmtDescription 
                dangerouslySetInnerHTML={{ __html: event.description }} 
                style={{ backgroundImage: `url(${event.image[0].url})` }}
              />
              <EmtLinks>
                <EmtLink>
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    {t("events:moreInfo")}
                  </a>
                </EmtLink>
                <EmtPastLink>
                  <a href={event.pastlink} target="_blank" rel="noopener noreferrer">
                    {t("events:scheduleMeeting")}
                  </a>
                </EmtPastLink>
              </EmtLinks>
            </EmtEventBlock>
          ))}
        </EmtUpcomingEvents>
      </EmtEvents>
    </StyledCurrentEvents>
  );
};

export { CurrentEvents };
