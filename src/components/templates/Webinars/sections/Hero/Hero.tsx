import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroText
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("webinars");

  return (
    <StyledHeroSection
      background="#F6F6F6"
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
      >
      <Container>
        <StyledHeroHeading level={1} size={1} textAlign="center">
          <Trans t={t} i18nKey={"HeroHeadingWatch"} components={[
              <Text as="span" color="#FF6F3D" key={0} />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroText
          size={1}
          textAlign="center"
          label={t("HeroTextTune")}
        />
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };