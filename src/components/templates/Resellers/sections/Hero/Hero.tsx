import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("resellers");

  return (
    <StyledHero
      desktopSpacing={["146px", "149px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["112px", "64px"]}
      mobileSpacing={["96px", "48px"]}
      background="#F9F9F9"
    >
      <Container maxWidth="1277px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading size={2}>
              <Trans
                t={t}
                i18nKey={"HeroTitle"}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <Text label={t("HeroText")} />
            <Button
              id="hero-become-partner"
              as="a"
              href="/partnership-request?requestType=0&from=resellers"
              label={t("BecomePartner")}
            />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
