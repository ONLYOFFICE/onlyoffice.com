import { useTranslation, TFunction } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  StyledPastEvents,
  StyledMoreLink,
  StyledPastEventsWrapper,
  StyledPastEventsTitle,
  StyledPastEventsList,
  StyledEventBlock,
  StyledEventTitle,
  StyledEventDate,
  StyledEventPlace,
  StyledPastLink
} from "./PastEvents.styled";
import { IPastEvents } from "./types";

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

const PastEvents = ({ events }: IPastEvents) => {
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
      <StyledPastEventsWrapper>
        <StyledPastEventsTitle>
          <Text label={t("events:pastEvents")} color="#666666" />
        </StyledPastEventsTitle>
        <StyledPastEventsList>
          {pastEvents.map((event) => (
            <StyledEventBlock key={event.id}>
              <StyledEventTitle
                level={2}
                label={event.name}
              />
              <StyledEventDate>
                {formatEventDate(event.start_date, t, event.end_date)}
                {event.start_time && ` ${event.start_time}`}
                {event.end_time && ` ${event.end_time}`}
              </StyledEventDate>
              <StyledEventPlace>{event.place}</StyledEventPlace>
              {event.pastlink && (
                <StyledPastLink>
                  <StyledMoreLink
                    href={event.pastlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    $imageUrl={event.image?.[0]?.url}
                    color="main"
                  >
                    {t("events:moreInfo")}
                  </StyledMoreLink>
                </StyledPastLink>
              )}
            </StyledEventBlock>
          ))}
        </StyledPastEventsList>
      </StyledPastEventsWrapper>
    </StyledPastEvents>
  );
};

export { PastEvents };
