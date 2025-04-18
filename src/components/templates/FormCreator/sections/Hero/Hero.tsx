import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const { t } = useTranslation("form-creator");
  const { t: t2 } = useTranslation("Editors");
  const { locale } = useRouter();

  return (
    <StyledHero
    desktopSpacing={["120px", "84px"]}
    tabletSpacing={["112px", "84px"]}
    tabletSmallSpacing={["96px", "80px"]}
    mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading level={1}>
            <Trans
              t={t}
              i18nKey="Header"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <Text size={1} label={t("SubHeader")} />
          <Button
            id="hero-get-it-now"
            as="a"
            href="/download#docs-enterprise"
            target="_blank"
            label={t2("GetItNow")}
          />
        </StyledHeroWrapper>

        {locale === 'zh' ? (
          <StyledHeroImg
            $imgUrl="/images/templates/form-creator/hero/zh/hero.png"
            $imgUrl2x="/images/templates/form-creator/hero/zh/hero@2x.png"
          />
        ) : (
          <StyledHeroVideo>
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/nxTIJmsg9iM?autoplay=1&mute=1"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </StyledHeroVideo>
        )}
      </Container>
    </StyledHero>
  );
};

export { Hero };
