import { useTranslation } from "next-i18next";
import {
  StyledCurrentEventsHeading,
  StyledCurrentEventsItems,
} from "./CurrentEvents.styled";
import { IEvents } from "../../Events.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Event } from "./sub-components/Event";

const CurrentEvents = ({ events }: IEvents) => {
  const { t } = useTranslation("events");

  return (
    <Section
      desktopSpacing={["80px", "112px"]}
      mobileSpacing={["72px", "72px"]}
    >
      <Container maxWidth="1008px">
        <StyledCurrentEventsHeading
          level={2}
          label={t("CurrentEvents")}
          color="main"
          textTransform="uppercase"
        />

        <StyledCurrentEventsItems>
          {events.upcoming.data.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              start_date={event.start_date}
              end_date={event.end_date}
              place={event.place}
              description={event.description}
              link={event.link}
              pastlink={event.pastlink}
              image={event.image}
              image_2X={event.image_2X}
            />
          ))}
        </StyledCurrentEventsItems>
      </Container>
    </Section>
  );
};

export { CurrentEvents };
