import { useTranslation, Trans } from "next-i18next";
import {
  StyledCarouselText,
} from "./Carousel.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { ImageCarousel } from "@src/components/modules/connectors/ImageCarousel";
import { items } from "./data/items";

const Carousel = () => {
  const { t } = useTranslation("automation-api");

  return (
    <Section
      desktopSpacing={["184px", "112px"]}
      tabletSpacing={["176px", "112px"]}
      tabletSmallSpacing={["128px", "112px"]}
      mobileSpacing={["112px", "48px"]}
    >
      <Container>
        <StyledCarouselText>
          <Heading level={2} size={2} label={t("ReadyToUse")} />
          <Text size={1} label={t("UsingAutomationAPI")} />
        <ImageCarousel
          imageHeight={575}
          items={items.map((item) => ({
            image: {
              url: t(item.image.url),
              url2x: item.image.url2x ? t(item.image.url2x) : undefined,
            },
          }))}
        />
        <Link
          href="/office-for-odoo.aspx"
          color="main"
          textUnderline
          hover="underline-none"
          label={t("LearnMore")}
        />
        </StyledCarouselText>
      </Container>
    </Section>
  );
};

export { Carousel };
