import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <StyledHeroSection
      desktopSpacing={["142px", "156px"]}
      tabletSpacing={["142px", "156px"]}
      tabletSmallSpacing={["136px", "88px"]}
      mobileSpacing={["96px", "63px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading size={2} label={t("HeroTitle")} />
            <Text size={1} label={t("HeroText")} />
            <Button
              as="a"
              href="/download-workspace"
              label={t("GetItNow")}
            />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
