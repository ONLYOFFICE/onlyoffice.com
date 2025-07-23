import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledSubtitle,
  StyledHeroVideo,
  StyledContainer,
  StyledAwards,
  StyledAward,
  StyledHero,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Trans } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { awards } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("desktop");
  const { locale } = useRouter();

  return (
    <StyledHero
      background="#f9f9f9"
      desktopSpacing={["134px", "112px"]}
      tabletSpacing={["134px", "112px"]}
      tabletSmallSpacing={["128px", "112px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <StyledContainer>
        <Heading level={1} size={1} textAlign="center">
          <Trans
            t={t}
            i18nKey="Hero"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>
        <StyledSubtitle>{t("HeroSubtitle")}</StyledSubtitle>
        <Button as="a" href="/download-desktop">
          {t("HeroButton")}
        </Button>
        <StyledHeroVideo>
          {locale === "zh" ? (
            <iframe
              width="100%"
              height="auto"
              src="//player.bilibili.com/player.html?isOutside=true&aid=BV1ZFKHzWE5g&bvid=BV1ZFKHzWE5g&cid=BV1ZFKHzWE5g"
              title="BiliBili"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/nxTIJmsg9iM?autoplay=1&mute=1"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </StyledHeroVideo>
        <StyledAwards>
          {awards.map((item, index) => (
            <StyledAward
              key={index}
              $positionX={item.positionX}
              $width={item.width}
              $imgUrl={item.imgUrl}
              href={item.link}
              target={item.isExternal ? "_blank" : undefined}
            />
          ))}
        </StyledAwards>
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
