import { useTranslation } from "next-i18next";
import {
  StyledShouldKnowBlock,
  StyledShouldKnowWrapper,
  StyledShouldKnowImage,
  StyledShouldKnowText
} from "./ShouldKnow.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const ShouldKnow = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <Section 
      desktopSpacing={["112px", "112px"]} 
      tabletSpacing={["0px", "80px"]} 
      tabletSmallSpacing={["40px", "80px"]} 
      mobileSpacing={["48px", "48px"]} 
      background="#F5F7FB"
    >
      <Container>
        <Heading level={2} size={4} textAlign="left">
          {t("WhatYouShouldKnowTitle")}
        </Heading>

        <StyledShouldKnowWrapper>
          {items.map((item, index) => (
            <StyledShouldKnowBlock key={index}>
              <StyledShouldKnowText>
                <Heading level={3} size={5}>
                  {t(item.heading)}
                </Heading>
                <Text>
                  {t(item.text)}
                </Text>
              </StyledShouldKnowText>
              <StyledShouldKnowImage
                src={t(item.image.url)}
                alt={t(item.image.alt) || ""}
              />
            </StyledShouldKnowBlock>
          ))}
        </StyledShouldKnowWrapper>
      </Container>
    </Section>
  );
};

export { ShouldKnow };
