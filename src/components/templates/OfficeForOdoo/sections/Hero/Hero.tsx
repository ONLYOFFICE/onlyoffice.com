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
  const { t } = useTranslation("office-for-odoo");

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
              label={t("OnlineOfficeForOdoo")}
              color="#ffffff"
            />
            <Text size={1} label={t("WorkWithBusinessDocuments")} />
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
              href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Odoo%20templates"
              label={t("RequestFreeDemo")}
            />
          </StyledHeroHeaderBtns>
        </StyledHeroWrapper>

        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/skGxBm7B-4A?autoplay=1&mute=1"
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
