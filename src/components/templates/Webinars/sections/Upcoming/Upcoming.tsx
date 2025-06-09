import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardItem } from "../../sub-components";

import {
  StyledUpcomingHeading,
  StyledUpcomingList
} from "./Upcoming.styled";

const Upcoming = () => {
  const { t } = useTranslation("webinars");

  return (
    <Section>
      <Container>
        <StyledUpcomingHeading
          label={t("UpcomingHeading")}
          textAlign="center"
          level={2}
          size={2}
        />
        <StyledUpcomingList>
          <CardItem
            date={"June 18, 2025"}
            language={"In English"}
            title={"ONLYOFFICE Docs 9.0: What’s new?"}
            description={"Discover the new version of ONLYOFFICE Docs, packed with exciting upgrades to make your workflow smoother and smarter. Experience the redesigned user-friendly interface, Diagram Viewer, extended file format compatibility, more AI tools, and further multiple improvements across the suite. Don’t miss out! Join our webinar to see the features from the latest release in action and have all your questions answered."}
            playText={"Watch now"}
            speaker={"ONLYOFFICE team & Medienstürmer"}
            image={"https://static-www.onlyoffice.com/v9.5.0/images/webinars/mediensturmer.png"}
            isUpcomingWebinar={true}
          />
          <CardItem
            date={"June 18, 2025"}
            language={"In English"}
            title={"ONLYOFFICE Docs 9.0: What’s new?"}
            description={"Discover the new version of ONLYOFFICE Docs, packed with exciting upgrades to make your workflow smoother and smarter. Experience the redesigned user-friendly interface, Diagram Viewer, extended file format compatibility, more AI tools, and further multiple improvements across the suite. Don’t miss out! Join our webinar to see the features from the latest release in action and have all your questions answered."}
            playText={"Watch now"}
            speaker={"ONLYOFFICE team & Medienstürmer"}
            image={"https://static-www.onlyoffice.com/v9.5.0/images/webinars/mediensturmer.png"}
            isUpcomingWebinar={true}
          />
          <CardItem
            date={"June 18, 2025"}
            language={"In English"}
            title={"ONLYOFFICE Docs 9.0: What’s new?"}
            description={"Discover the new version of ONLYOFFICE Docs, packed with exciting upgrades to make your workflow smoother and smarter. Experience the redesigned user-friendly interface, Diagram Viewer, extended file format compatibility, more AI tools, and further multiple improvements across the suite. Don’t miss out! Join our webinar to see the features from the latest release in action and have all your questions answered."}
            playText={"Watch now"}
            speaker={"ONLYOFFICE team & Medienstürmer"}
            image={"https://static-www.onlyoffice.com/v9.5.0/images/webinars/mediensturmer.png"}
            isUpcomingWebinar={false}
          />
        </StyledUpcomingList>
      </Container>
    </Section>
  );
};

export { Upcoming };