import React from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  HeroWrapper,
  Content,
  VideoWrapper,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";

export const Hero = () => {
  const { t } = useTranslation("academy");
  const { locale } = useRouter();

  const scrollToBlock = () => {
    const element = document.getElementById("discover");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      background="#F5F5F5"
      desktopSpacing={["136px", "80px"]}
      tabletSpacing={["136px", "80px"]}
      tabletSmallSpacing={["104px", "121px"]}
      mobileSpacing={["88px", "68px"]}
    >
      <Container>
        <HeroWrapper>
          <Content>
            <Heading level={1}>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={[<Text as="span" color="main" key="0" />]}
              />
            </Heading>
            <Heading level={3}>{t("HeroSubtitle")}</Heading>
            <Text>{t("HeroDesc")}</Text>
            <Button onClick={scrollToBlock}>{t("HeroButton")}</Button>
          </Content>
          <VideoWrapper>
            <iframe
              src={locale === "zh" ? "https://player.bilibili.com/player.html?aid=BV111421Z7Ry&bvid=BV111421Z7Ry&cid=BV111421Z7Ry" : "https://www.youtube.com/embed/7HY30Xg7PdI?autoplay=1&mute=1"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        </HeroWrapper>
      </Container>
    </StyledHero>
  );
};
