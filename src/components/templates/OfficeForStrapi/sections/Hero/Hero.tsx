import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { ImageCarousel } from "@src/components/modules/connectors/ImageCarousel";
import { items } from "./data/items";
import { useRouter } from "next/router";

const Hero = () => {
  const { t } = useTranslation("office-for-strapi");
  const { locale } = useRouter();

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["184px", "112px"]}
      tabletSpacing={["176px", "112px"]}
      tabletSmallSpacing={["128px", "112px"]}
      mobileSpacing={["112px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader $locale={locale}>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OnlineOfficeForConnector"
                components={[<Text as="span" color="#8E75FF" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <Button
            onClick={() => scrollToBlock()}
            id="hero-get-started"
            label={t("GetStarted")}
          />

          <Text
            fontSize="14px"
            lineHeight="19px"
            label={t("FullyCompatibleWithDocxXlsxAndPptx")}
          />
        </StyledHeroWrapper>
      </Container>

      <ImageCarousel
        imageHeight={575}
        items={items.map((item) => ({
          image: {
            url: t(item.image.url),
            url2x: item.image.url2x ? t(item.image.url2x) : undefined,
          },
        }))}
      />
    </StyledHero>
  );
};

export { Hero };
