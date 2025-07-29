import { Trans, useTranslation } from "next-i18next";
import { StyledFeaturesWrapper, StyledFeatureImageItem, StyledFeaturesHero } from "./Features.styled";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Features = () => {
  const { t } = useTranslation("docs-enterprise");

  return (
    <StyledFeaturesHero background="#333333">
      <Container>
        <Heading color="white" level={2}>
          {t("FeaturesHeader")}
        </Heading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <StyledFeatureImageItem
              fontSize="16px"
              key={index}
              contentWidth={item.contentWidth}
              heading={t(item.heading)}
              rowGap={16}
              gap={item.gap}
              marginTop={item.marginTop}
              text={
                item.heading === "FeatureTitle1" ? (
                  <Trans
                    t={t}
                    i18nKey="FeatureText1"
                    components={[
                      <Text
                        as="span"
                        key={0}
                        fontWeight={700}
                      />,
                      <Text
                        key={1}
                        as="p"
                      />,
                      <Link
                        key={2}
                        href="/download-desktop#desktop"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={3}
                        href="/download-desktop#mobile"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />
                    ]}
                  />
                ) : (
                  <>
                    {t(String(item.text))}
                  </>
                )
              }
              position={{ desktop: index % 2 === 1 ? "right" : "left" }}
              links={item.links?.map((link) => ({
                ...link,
                href: link.href,
                label: t(String(link.label)),
              }))}
              image={{
                url: item.image.url,
                url2x: item.image.url2x,
                height: item.image.height,
                width: item.image.width,
              }}
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </StyledFeaturesHero>
  );
};

export { Features };
