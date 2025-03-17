import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledTeamworkHeading,
  StyledTeamworkText,
  StyledCardText,
  StyledCardTitle,
  StyledFirstLine,
  StyledSecondLine,
  StyledTeamworkCard,
} from "./Teamwork.styled";
import { Section } from "@src/components/ui/Section";

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
          label={t("IdealForTeamwork")}
          textAlign="center"
        />
        <StyledTeamworkText
          textAlign="center"
          label={t("EasilyGetAnyGroupWorkOrProject")}
        />
        <StyledFirstLine>
          <StyledTeamworkCard $type="education">
            <StyledCardTitle level={3} label={t("Education")} />
            <StyledCardText label={t("EducationDesc")} />
          </StyledTeamworkCard>
          <StyledTeamworkCard $type="business">
            <StyledCardTitle level={3} label={t("Business")} />
            <StyledCardText label={t("BusinessDesc")} />
          </StyledTeamworkCard>
        </StyledFirstLine>
        <StyledSecondLine>
          <StyledTeamworkCard $type="individuals">
            <StyledCardTitle level={3} label={t("Individuals")} />
            <StyledCardText label={t("IndividualsDesc")} />
          </StyledTeamworkCard>
          <StyledTeamworkCard $type="legal">
            <StyledCardTitle level={3} label={t("Legal")} />
            <StyledCardText label={t("LegalDesc")} />
          </StyledTeamworkCard>
        </StyledSecondLine>
      </Container>
    </Section>
  );
};

export { Teamwork };
