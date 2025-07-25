import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledSection,
  StyledDescription,
  ButtonsContainer,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";

const Hero = () => {
  const { t } = useTranslation("developer-edition");
  const { locale } = useRouter();

  return (
    <StyledSection
      desktopSpacing={["128px", "156px"]}
      tabletSpacing={["128px", "156px"]}
      tabletSmallSpacing={["128px", "86px"]}
      mobileSpacing={["90px", "60px"]}
    >
      <Container>
        <Heading color="white" level={1}>
          {t("HeroTitle")}
        </Heading>
        <StyledDescription>{t("HeroSubtitle")}</StyledDescription>
        <ButtonsContainer>
          <Button
            as="a"
            href="/download-developer?from=onlyoffice-integration&plan=5#docs-developer"
          >
            {t("HeroButtonGetIt")}
          </Button>
          <Button
            as="a"
            href="/see-it-in-action?developer=edition"
            variant="quinary"
          >
            {t("HeroButtonSeeAction")}
          </Button>
        </ButtonsContainer>
        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            src={
              locale === "zh"
                ? "//player.bilibili.com/player.html?aid=323645389&bvid=BV1Aw411p7rg&cid=1338470923&p=1"
                : "https://www.youtube.com/embed/O5zQTeX9f-8?autoplay=1&amp;mute=1"
            }
            title={locale === "zh" ? "BiliBili" : "Youtube"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </StyledHeroVideo>
      </Container>
    </StyledSection>
  );
};

export { Hero };
