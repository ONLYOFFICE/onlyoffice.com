import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledStayOrganizedContent,
  StyledStayOrganizedFeatures,
  StyledStayOrganizedFeaturesItem,
  StyledStayOrganizedFeaturesText,
  StyledStayOrganizedImage,
  StyledStayOrganizedWrapper,
} from "./StayOrganized.styled";
import { features } from "./data/items";
import { Heading } from "@src/components/ui/Heading";

const StayOrganized = () => {
  const { t } = useTranslation("document-management");

  return (
    <Section
      desktopSpacing={["160px", "112px"]}
      tabletSpacing={["160px", "112px"]}
      tabletSmallSpacing={["131px", "88px"]}
      mobileSpacing={["72px", "48px"]}
    >
      <Container>
        <StyledStayOrganizedWrapper>
          <StyledStayOrganizedContent>
            <Heading level={2} size={3} label={t("StayOrganized")} />
            <StyledStayOrganizedFeatures>
              {features.map(({ title, text }, index) => (
                <StyledStayOrganizedFeaturesItem key={index}>
                  <Heading level={4} size={5} label={t(title)} />
                  <StyledStayOrganizedFeaturesText label={t(text)} />
                </StyledStayOrganizedFeaturesItem>
              ))}
            </StyledStayOrganizedFeatures>
          </StyledStayOrganizedContent>
          <StyledStayOrganizedImage $image="/images/templates/document-management/stay-organized/stay-organized.svg" />
        </StyledStayOrganizedWrapper>
      </Container>
    </Section>
  );
};

export { StayOrganized };
