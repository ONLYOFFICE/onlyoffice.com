import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import { StyledHeroHeading } from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("see-it-in-action");

  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["112px", "88px"]}
      tabletSpacing={["112px", "88px"]}
      tabletSmallSpacing={["88px", " 88px"]}>
      <Container>
        <StyledHeroHeading
          level={1}
          size={1}
          label={t("HeroHeadingSeeIt")}
          textAlign="center"
        />
        <Text
          size={1}
          textAlign="center"
          label={t("HeroTextCurious")}
        />
      </Container>
    </Section>
  );
};

export { Hero };
