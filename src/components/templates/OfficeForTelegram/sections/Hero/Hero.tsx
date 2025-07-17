import { Trans, useTranslation } from "next-i18next";
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
  const { t } = useTranslation("office-for-telegram");

  return (
    <StyledHero
      desktopSpacing={["126px", "0px"]}
      tabletSpacing={["126px", "0px"]}
      tabletSmallSpacing={["119px", "0px"]}
      mobileSpacing={["72px", "0px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OnlineOfficeForTelegram"
                components={[<Text as="span" color="#47b41b" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("OpenCreateConvertEdit")} />
          </StyledHeroHeader>

          <StyledHeroHeaderBtns>
            <Button
              id="hero-get-started"
              label={t("StartNow")}
              href="https://t.me/ONLYOFFICE_bot"
              as="a"
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
