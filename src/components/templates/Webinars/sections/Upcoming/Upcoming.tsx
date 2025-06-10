import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardItem } from "../../sub-components";
import { IWebinars } from "../../Webinars.types";

import {
  StyledUpcomingHeading,
  StyledUpcomingList
} from "./Upcoming.styled";

const Upcoming = ({ webinars }: IWebinars) => {
  const { t } = useTranslation("webinars");
  const { data } = webinars.upcoming;

  return (
    <Section
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledUpcomingHeading
          label={t("UpcomingHeading")}
          textAlign="center"
          level={2}
          size={2}
        />
        <StyledUpcomingList>
          {data && data.map((item) => (
            <CardItem
              key={item.id}
              date={item.date}
              language={item.language}
              title={item.title}
              description={item.description}
              link={item.watch_link}
              speaker={item.speaker}
              image={item.speaker_image[0].url}
              product={item.product}
              isUpcomingWebinar={true}
            />
          ))}
        </StyledUpcomingList>
      </Container>
    </Section>
  );
};

export { Upcoming };