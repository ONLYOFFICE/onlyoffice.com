import { useTranslation } from "next-i18next";
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

const Hero = () => {
  const { t } = useTranslation("office-for-sharepoint");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["134px", "112px"]}
      tabletSpacing={["126px", "112px"]}
      tabletSmallSpacing={["128px", "112px"]}
      mobileSpacing={["112px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} size={1} label={t("OnlineOfficeForConnector")} />
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <Button
            onClick={() => scrollToBlock()}
            id="hero-get-started"
            label={t("GetStarted")}
          />
        </StyledHeroWrapper>
      </Container>

      <ImageCarousel
        imageWidth={1120}
        imageHeight={600}
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
