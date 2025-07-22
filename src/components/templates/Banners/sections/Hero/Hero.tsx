import { useTranslation } from "next-i18next";
import {
  StyledHeroHeading,
} from "./Hero.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const Hero = () => {
  const { t } = useTranslation("banners");

  return (
    <Section
      desktopSpacing={["80px", "0px"]}
      tabletSpacing={["80px", "0px"]}
      tabletSmallSpacing={["80px", "0px"]}
      mobileSpacing={["80px", "0px"]}
    >
      <Container maxWidth="1050px">
        <StyledHeroHeading level={1} size={2} label={t("HeroTitle")} />
      </Container>
    </Section>
  );
};

export { Hero };
