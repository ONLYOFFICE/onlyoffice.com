import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { CardItem } from "../../sub-components";

import { StyledWatchHeading, StyledWatchList } from "./Watch.styled";

const Watch = () => {
  const { t } = useTranslation("webinars");

  return (
    <Section>
      <Container>
        <StyledWatchHeading
          label={t("WatchHeading")}
          textAlign="center"
          level={2}
          size={2}
        />
        <Text label={t("WatchText")} size={2} textAlign="center" />
        <StyledWatchList>
          <CardItem
            date={"June 18, 2025"}
            language={"In English"}
            title={"ONLYOFFICE Docs 9.0: What’s new?"}
            description={"Discover the new version of ONLYOFFICE Docs, packed with exciting upgrades to make your workflow smoother and smarter. Experience the redesigned user-friendly interface, Diagram Viewer, extended file format compatibility, more AI tools, and further multiple improvements across the suite. Don’t miss out! Join our webinar to see the features from the latest release in action and have all your questions answered."}
            playText={"Watch now"}
            speaker={"ONLYOFFICE team & Medienstürmer"}
            image={"https://static-www.onlyoffice.com/v9.5.0/images/webinars/mediensturmer.png"}
            product={"ONLYOFFICE Docs"}
            isUpcomingWebinar={false}
          />
        </StyledWatchList>
      </Container>
    </Section>
  );
};

export { Watch };