import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroWrapper,
  StyledButtonWrapper,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("solutions");

  return (
    <StyledHeroSection
      desktopSpacing={["94px", "73px"]}
      tabletSpacing={["94px", "73px"]}
      tabletSmallSpacing={["146px", "90px"]}
      mobileSpacing={["96px", "38px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading size={2} label={t("PowerfulOfficeSuiteForAny")} />
            <Text size={1} label={t("WhateverYouNeed")} />
            <StyledButtonWrapper>
              <Button as="a" href="/demo-order" label={t("OrderDemo")} />
              <Button
                as="a"
                variant="secondary"
                href="mailto:sales@onlyoffice.com"
                label={t("ContactSales")}
              />
            </StyledButtonWrapper>
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
