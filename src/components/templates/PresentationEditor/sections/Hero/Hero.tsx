import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("presentation-editor");
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
          <Heading level={1} color="#ffffff" label={t("Header")} />
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
            $imgUrl="/images/templates/presentation-editor/hero/zh/hero.png"
            $imgUrl2x="/images/templates/presentation-editor/hero/zh/hero@2x.png"
          />
        ) : (
          <StyledHeroVideo>
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/kxMwSea5Nw4?autoplay=1&mute=1"
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
