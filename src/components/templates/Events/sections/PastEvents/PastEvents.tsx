import { useTranslation } from "next-i18next";
import {
  StyledPastEventsHeading,
  StyledPastEventsList,
} from "./PastEvents.styled";
import { IEvents } from "../../Events.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Event } from "./sub-components/Event";

const PastEvents = ({ events }: IEvents) => {
  const { t } = useTranslation("events");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["80px", "80px"]}
      tabletSpacing={["80px", "80px"]}
    >
      <Container maxWidth="942px">
        <StyledPastEventsHeading
          textTransform="uppercase"
          label={t("PastEvents")}
          color="#666666"
        />

        <StyledPastEventsList>
          {events.past.data.map((event) => (
            <Event
              key={event.id}
              name={event.name}
              start_date={event.start_date}
              end_date={event.end_date}
              place={event.place}
              link={event.link}
              image={event.image}
            />
          ))}
        </StyledPastEventsList>
      </Container>
    </Section>
  );
};

export { PastEvents };
