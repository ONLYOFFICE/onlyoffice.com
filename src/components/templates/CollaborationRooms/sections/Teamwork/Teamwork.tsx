import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledFirstLine,
  StyledSecondLine,
  StyledTeamworkCard,
  StyledTeamworkWrapper,
} from "./Teamwork.styled";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const Teamwork = () => {
  const { t } = useTranslation("collaboration-rooms");
  return (
    <Section
      desktopSpacing={["124px", "0"]}
      tabletSmallSpacing={["72px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledTeamworkWrapper>
          <Heading
            label={t("IdealForTeamwork")}
            textAlign="center"
            className="teamwork-title"
          />
          <Text
            textAlign="center"
            size={1}
            className="teamwork-text"
            label={t("EasilyGetAnyGroupWorkOrProject")}
          />
          <StyledFirstLine>
            <StyledTeamworkCard className="education">
              <Text className="education-title" label={t("Education")} />
              <Text
                className="education-text"
                label={t("EducationDesc")}
              />
            </StyledTeamworkCard>
            <StyledTeamworkCard className="business">
              <Text className="business-title" label={t("Business")} />
              <Text
                className="business-text"
                label={t("BusinessDesc")}
              />
            </StyledTeamworkCard>
          </StyledFirstLine>
          <StyledSecondLine>
            <StyledTeamworkCard className="individuals">
              <Text className="individuals-title" label={t("Individuals")} />
              <Text
                className="individuals-text"
                label={t("IndividualsDesc")}
              />
            </StyledTeamworkCard>
            <StyledTeamworkCard className="legal">
              <Text className="legal-title" label={t("Legal")} />
              <Text
                className="legal-text"
                label={t("LegalDesc")}
              />
            </StyledTeamworkCard>
          </StyledSecondLine>
        </StyledTeamworkWrapper>
      </Container>
    </Section>
  );
};

export { Teamwork };
