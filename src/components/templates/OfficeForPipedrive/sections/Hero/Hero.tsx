import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroImg,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-pipedrive");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      background="#017737"
      desktopSpacing={["120px", "56px"]}
      tabletSpacing={["112px", "56px"]}
      tabletSmallSpacing={["119px", "74px"]}
      mobileSpacing={["99px", "48px"]}
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

          <StyledHeroHeaderBtns>
            <Button
              onClick={() => scrollToBlock()}
              id="hero-get-started"
              label={t("GetStarted")}
            />
            <Button
              as="a"
              variant="quaternary"
              id="hero-request-free-demo"
              href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Pipedrive%20templates"
              label={t("ScheduleFreeDemo")}
            />
          </StyledHeroHeaderBtns>
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
