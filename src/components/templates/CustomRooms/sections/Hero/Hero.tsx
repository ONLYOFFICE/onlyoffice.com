import { Trans, useTranslation } from "next-i18next";
import { StyledHero } from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { RoomsHero } from "@src/components/widgets/RoomsHero";
import { hero } from "./data/hero";

const Hero = () => {
  const { t } = useTranslation("custom-rooms");

  return (
    <StyledHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <RoomsHero
          title={
            <Trans
              t={t}
              i18nKey={String(hero.title)}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          }
          text={t(hero.text)}
          items={hero.items.map(({ label }) => ({
            label: typeof label === "string" && t(label),
          }))}
          button={{ ...hero.button, label: t(hero.button.label) }}
          imgUrl={t(hero.imgUrl)}
          imgUrl2x={t(hero.imgUrl2x)}
          imgWidth={hero.imgWidth}
          imgHeight={hero.imgHeight}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
