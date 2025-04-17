import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledFeature,
  StyledHeroFeatures,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroImageWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/item";

const Hero = () => {
  const { t } = useTranslation("app-server");

  return (
    <Section
      desktopSpacing={["82px", "0"]}
      tabletSpacing={["82px", "0"]}
      tabletSmallSpacing={["88px", "0"]}
      mobileSpacing={["32px", "0"]}
    >
      <Container>
        <StyledHeroHeading>
          <Trans
            t={t}
            i18nKey="HeroTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledHeroHeading>
        <Text
          label={t("HeroText")}
          textAlign="center"
          size={1}
          color="#666666"
        />
        <StyledHeroFeatures>
          {items.map(({ label, icon }, index) => (
            <StyledFeature
              key={index}
              label={t(label)}
              $positionX={icon.positionX}
              $mobilePositionX={icon.mobilePositionX}
            />
          ))}
        </StyledHeroFeatures>
      </Container>
      <StyledHeroImageWrapper>
        <StyledHeroImage />
      </StyledHeroImageWrapper>
    </Section>
  );
};

export { Hero };
