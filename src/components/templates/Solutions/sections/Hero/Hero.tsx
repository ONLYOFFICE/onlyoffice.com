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
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useTranslation("solutions");
  const items = ["Team", "Task", "Platform", "OS", "Industry", "Branch"];
  const locales = ["en", "ru", "fr", "it", "zh"];
  const { locale } = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

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
            <Heading size={2}>
              {t("PowerfulOfficeSuiteForAny")}{" "}
              {locale !== "ja" && <Text as="span" color="main">
                {locales.includes(String(locale))
                  ? t(items[index])
                  : t("Team")}
              </Text>}
            </Heading>
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
