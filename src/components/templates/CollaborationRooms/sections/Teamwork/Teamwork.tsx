import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { StyledTeamworkText, StyledTeamworkItems } from "./Teamwork.styled";
import { Section } from "@src/components/ui/Section";
import { teamworkItems } from "./data/items";
import { Heading } from "@src/components/ui/Heading";
import { TeamworkCard } from "./sub-components/TeamworkCard/TeamworkCard";

const Teamwork = () => {
  const { t } = useTranslation("collaboration-rooms");
  return (
    <Section
      desktopSpacing={["124px", "0"]}
      tabletSmallSpacing={["72px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <Heading level={2} label={t("IdealForTeamwork")} textAlign="center" />
        <StyledTeamworkText
          textAlign="center"
          label={t("EasilyGetAnyGroupWorkOrProject")}
        />
        <StyledTeamworkItems>
          {teamworkItems.map(
            ({ title, text, background, borderColor }, index) => (
              <TeamworkCard
                key={index}
                title={t(title)}
                text={t(text)}
                background={background}
                borderColor={borderColor}
              />
            ),
          )}
        </StyledTeamworkItems>
      </Container>
    </Section>
  );
};

export { Teamwork };
