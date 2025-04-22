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
import { ImageCarousel } from "@src/components/widgets/ImageCarousel";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("office-for-sharepoint");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["134px", "32px"]}
      tabletSpacing={["134px", "32px"]}
      tabletSmallSpacing={["128px", "32px"]}
      mobileSpacing={["112px", "24px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
          <Heading
              level={1}
              size={1}
              label={t("OnlineOfficeForConnector")}
            />
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <Button
            onClick={() => scrollToBlock()}
            id="hero-get-started"
            label={t("GetStarted")}
          />
        </StyledHeroWrapper>

        <ImageCarousel
          imageHeight={513}
          items={items.map((item) => ({
            image: {
              url: t(item.image.url),
              url2x: item.image.url2x ? t(item.image.url2x) : undefined
            }
          }))}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
