import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroImg
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
      desktopSpacing={["134px", "105px"]}
      tabletSpacing={["134px", "105px"]}
      tabletSmallSpacing={["119px", "72px"]}
      mobileSpacing={["96px", "68px"]}
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
          $imgUrl={t("HeroImgUrl")}
          $imgUrl2x={t("HeroImgUrl2x")}
        />

      </Container>
    </StyledHero>
  );
};

export { Hero };
