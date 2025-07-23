import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardItem } from "../../sub-components/CardItem/";
import { formatWebinarsDate, formatWebinarsDateWithHours } from "../../utils/formaWebinarsDate";
import { IWebinars } from "../../Webinars.types";
import { ILocale } from "@src/types/locale";

import {
  StyledUpcomingHeading,
  StyledUpcomingList
} from "./Upcoming.styled";

const Upcoming = ({ webinars, locale }: ILocale & IWebinars) => {
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
              date={formatWebinarsDate(item.date, locale)}
              dateWithHours={formatWebinarsDateWithHours(item.date, locale)}
              language={item.language}
              title={item.title}
              description={item.description}
              link={item.watch_link}
              speaker={item.speaker}
              image={item.speaker_image}
              product={item.product}
              isUpcomingWebinar={true}
            />
          ))}
          {/* <CardItem
              key={"0001"}
              date={"June 18, 2025"}
              dateWithHours={"June 18, 2025 5:00 PM"}
              language={"In English"}
              title={"ONLYOFFICE Docs 9.0: What’s new?"}
              description={"Discover the new version of ONLYOFFICE Docs, packed with exciting upgrades to make your workflow smoother and smarter. Experience the redesigned user-friendly interface, Diagram Viewer, extended file format compatibility, more AI tools, and further multiple improvements across the suite. Don’t miss out! Join our webinar to see the features from the latest release in action and have all your questions answered."}
              link={undefined}
              speaker={"ONLYOFFICE team & Medienstürmer"}
              image={[{url: "https://static-cms.teamlab.info/images/webinars/mediensturmer_d3128b450a.png"}, {url: "https://static-cms.teamlab.info/images/webinars/mediensturmer_d3128b450a.png"}]}
              product={"ONLYOFFICE Docs"}
              isUpcomingWebinar={true}
            /> */}
        </StyledUpcomingList>
      </Container>
    </Section>
  );
};

export { Upcoming };