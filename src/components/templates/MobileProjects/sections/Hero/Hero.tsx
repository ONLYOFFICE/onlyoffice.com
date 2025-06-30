import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";

import {
  StyledSubtitle,
  StyledButton,
  StyledSection,
  StyledHeading,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("mobile-projects");

  return (
    <StyledSection
      desktopSpacing={["232px", "237px"]}
      tabletSpacing={["112px", "677px"]}
      tabletSmallSpacing={["112px", "80vw"]}
      mobileSpacing={["72px", "80vw"]}
    >
      <Container>
        <StyledHeading level={1} label={t("HeroTitle")} />
        <StyledSubtitle>{t("HeroSubtitle")}</StyledSubtitle>
        <StyledButton
          $backgroundUrl={t("iTunesButtonImg")}
          as="a"
          href={t("iTunesLink")}
          target="_blank"
          rel="noopener"
        />
      </Container>
    </StyledSection>
  );
};

export { Hero };
