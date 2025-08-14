import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { StyledContainer, StyledDescription } from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("legalterms");

  return (
    <Section
      desktopSpacing={["112px", "0px"]}
      tabletSpacing={["112px", "0px"]}
      tabletSmallSpacing={["112px", "0px"]}
      mobileSpacing={["112px", "0px"]}
    >
      <StyledContainer>
        <Heading level={1}>{t("HeroTitle")}</Heading>
        <StyledDescription>{t("HeroDescription")}</StyledDescription>
      </StyledContainer>
    </Section>
  );
};

export { Hero };
