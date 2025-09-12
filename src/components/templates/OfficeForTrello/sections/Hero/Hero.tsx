import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroImg,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-trello");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["134px", "93px"]}
      tabletSpacing={["126px", "93px"]}
      tabletSmallSpacing={["128px", "80px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading
              level={1}
              size={1}
              label={t("OnlineOfficeForConnector")}
              color="#ffffff"
            />
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <Button
            variant="quaternary"
            onClick={() => scrollToBlock()}
            id="hero-get-started"
            label={t("GetStarted")}
          />
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={getAssetUrl(t("HeroImgUrl"))}
          $imgUrl2x={t("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
