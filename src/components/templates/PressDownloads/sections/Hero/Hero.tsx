import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { StyledHeroWrapper } from "./Hero.styled";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("press-downloads");

  return (
    <Section
      desktopSpacing={["184px", "33px"]}
      tabletSpacing={["184px", "33px"]}
      tabletSmallSpacing={["120px", "80px"]}
      mobileSpacing={["88px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading size={1} label={t("HeroTitle")} />
          <Text size={1} label={t("HeroDescription")} />
        </StyledHeroWrapper>
      </Container>
    </Section>
  );
};

export { Hero };
