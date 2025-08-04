import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledHeroHeading, StyledHeroWrapper } from "./Hero.styled";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("hosting-providers");

  return (
    <Section
      desktopSpacing={["64px", "112px"]}
      tabletSmallSpacing={["64px", "112px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroHeading size={2}>
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledHeroHeading>
          <Text size={1} label={t("HeroText")} />
        </StyledHeroWrapper>
      </Container>
    </Section>
  );
};

export { Hero };
