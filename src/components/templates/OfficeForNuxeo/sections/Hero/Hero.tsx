import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroSubHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { ImageCarousel } from "@src/components/modules/connectors/ImageCarousel";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("office-for-nuxeo");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      background="#f5f5f5"
      desktopSpacing={["184px", "104px"]}
      tabletSpacing={["126px", "24px"]}
      tabletSmallSpacing={["104px", "53px"]}
      mobileSpacing={["88px", "55px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} size={2}>
              <Trans
                t={t}
                i18nKey="OnlineOfficeForConnector"
                components={[<Text as="span" color="#0067FF" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <Button
            onClick={() => scrollToBlock()}
            id="hero-get-started"
            label={t("GetStarted")}
          />

          <StyledHeroSubHeading
            level={2}
            label={t("FullyCompatibleWithDocxXlsxAndPptx")}
          />
        </StyledHeroWrapper>
      </Container>

      <ImageCarousel
        items={items.map((item) => ({
          image: {
            url: getAssetUrl(t(item.image.url)),
            url2x: item.image.url2x ? t(item.image.url2x) : undefined,
          },
        }))}
      />
    </StyledHero>
  );
};

export { Hero };
