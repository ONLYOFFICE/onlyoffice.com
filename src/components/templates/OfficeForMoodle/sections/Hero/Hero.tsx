import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-moodle");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["134px", "118px"]}
      tabletSpacing={["134px", "118px"]}
      tabletSmallSpacing={["124px", "112px"]}
      mobileSpacing={["96px", "56px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} label={t("OnlineOfficeForMoodle")} />
            <Text size={1} label={t("WorkWithOfficeDocuments")} />
          </StyledHeroHeader>

          <Button
            onClick={scrollToBlock}
            id="hero-get-started"
            label={t("GetStarted")}
          />
        </StyledHeroWrapper>

        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/QvY4x6badjc?autoplay=1&amp;mute=1&amp;loop=1"
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
