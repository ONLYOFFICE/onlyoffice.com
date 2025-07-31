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

const Hero = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <StyledHero
      desktopSpacing={["134px", "102px"]}
      tabletSpacing={["144px", "76px"]}
      tabletSmallSpacing={["144px", "76px"]}
      mobileSpacing={["144px", "44px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} label={t("OnlineOfficeForMonday")} />
            <Text size={1} label={t("WorkWithOfficeFiles")} />
          </StyledHeroHeader>
        </StyledHeroWrapper>

        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/vAGlfMb-jJA?autoplay=1&mute=1&loop=1"
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
