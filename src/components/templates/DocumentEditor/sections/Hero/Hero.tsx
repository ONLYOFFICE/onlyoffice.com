import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("document-editor");
  const { t: t2 } = useTranslation("Editors");

  return (
    <StyledHero
    desktopSpacing={["120px", "84px"]}
    tabletSpacing={["112px", "84px"]}
    tabletSmallSpacing={["96px", "80px"]}
    mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading level={1} color="#ffffff" label={t("Header")} />
          <Text size={1} label={t("SubHeader")} />
          <Button
            id="hero-get-it-now"
            as="a"
            href="/download#docs-enterprise"
            target="_blank"
            label={t2("GetItNow")}
          />
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={t("HeroImgUrl")}
          $imgUrl2x={t("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
