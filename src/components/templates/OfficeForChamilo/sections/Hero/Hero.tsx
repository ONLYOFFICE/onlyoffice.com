import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-chamilo");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["120px", "88px"]}
      tabletSpacing={["120px", "88px"]}
      tabletSmallSpacing={["119px", "74px"]}
      mobileSpacing={["99px", "61px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading
              level={1}
              size={1}
              label={t("OnlineOfficeForChamilo")}
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
              href="/demo-order?from=officeforchamilo"
              label={t("RequestFreeDemo")}
            />
          </StyledHeroHeaderBtns>
        </StyledHeroWrapper>

        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            style={{ aspectRatio: "64/36" }}
            src="https://www.youtube.com/embed/ZDKAY-ZWTb0?si=tOGQHNOErvbjBo-z&autoplay=1&mute=1&loop=1"
            title="YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </StyledHeroVideo>
      </Container>
    </StyledHero>
  );
};

export { Hero };
