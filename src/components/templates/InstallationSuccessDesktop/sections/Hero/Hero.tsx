import { useTranslation, Trans } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledHeroImage,
  StyledHeroContent,
  StyledHeroFeaturesWrapper,
  StyledHeroFeaturesTitle,
  StyledHeroFeatures,
  StyledHeroFeatureItem,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("installation-success-desktop");

  return (
    <Section
      desktopSpacing={["64px", "112px"]}
      tabletSpacing={["64px", "112px"]}
    >
      <Container>
        <StyledHeroImage />
        <StyledHeroContent>
          <Heading size={2}>
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <Text size={1} label={t("HeroSubTitle")} />
        </StyledHeroContent>

        <StyledHeroFeaturesWrapper>
          <StyledHeroFeaturesTitle
            level={3}
            size={4}
            label={t("EditingCapabilities")}
          />
          <StyledHeroFeatures>
            {items.map((item) => (
              <StyledHeroFeatureItem
                key={item.label}
                size={2}
                iconPositionX={item.iconPositionX}
              >
                <Trans
                  t={t}
                  i18nKey={item.label}
                  components={[<Text as="span" fontWeight={700} key="0" />]}
                />
              </StyledHeroFeatureItem>
            ))}
          </StyledHeroFeatures>
        </StyledHeroFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Hero };
