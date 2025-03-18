import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledTeamworkHeading,
  StyledTeamworkText,
  StyledFirstLine,
  StyledSecondLine,
} from "./Teamwork.styled";
import { Section } from "@src/components/ui/Section";
import { teamworkItems } from "./data/items";
import { TeamworkCard } from "./sub-components/TeamworkCard";

const Teamwork = () => {
  const { t } = useTranslation("collaboration-rooms");
  return (
    <Section
      desktopSpacing={["124px", "0"]}
      tabletSmallSpacing={["72px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledTeamworkHeading
          level={2}
          label={t("IdealForTeamwork")}
          textAlign="center"
        />
        <StyledTeamworkText
          textAlign="center"
          label={t("EasilyGetAnyGroupWorkOrProject")}
        />
        <StyledFirstLine>
          {teamworkItems.firstLineItems.map(
            ({ type, title, description }, index) => (
              <TeamworkCard
                key={index}
                type={type}
                title={t(title)}
                text={t(description)}
              />
            ),
          )}
        </StyledFirstLine>
        <StyledSecondLine>
          {teamworkItems.secondLineItems.map(
            ({ type, title, description }, index) => (
              <TeamworkCard
                key={index}
                type={type}
                title={t(title)}
                text={t(description)}
              />
            ),
          )}
        </StyledSecondLine>
      </Container>
    </Section>
  );
};

export { Teamwork };
