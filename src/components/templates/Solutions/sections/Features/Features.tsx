import { useTranslation, Trans } from "next-i18next";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StyledFeaturesWrapper, StyledHeading } from "./Features.styled";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const Features = ({ locale }: ILocale) => {
  const { t } = useTranslation("solutions");

  return (
    <Section>
      <Container>
        <StyledHeading level={2} color="#333333" textAlign="center">
          {t("HandlingAnyOfficeTask")}
        </StyledHeading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureImageItem
              fontSize="14px"
              key={index}
              contentWidth={item.contentWidth}
              heading={
                <Trans
                  t={t}
                  i18nKey={String(item.heading)}
                  components={[<Text key={0} as="span" color="main" />]}
                />
              }
              rowGap={16}
              gap={item.gap}
              marginTop={item.marginTop}
              text={
                <Trans
                  t={t}
                  i18nKey={String(item.text)}
                  components={[
                    <Link
                      key={0}
                      href={item.links?.[0].href}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />,
                  ]}
                />
              }
              position={{ desktop: index % 2 === 1 ? "right" : "left" }}
              links={item.links?.map((link) => ({
                ...link,
                href: link.href === "templatesLink" ? getLink("templates", locale) : link.href,
                label: t(String(link.label)),
              }))}
              image={{
                url: item.image.url,
                height: item.image.height,
                width: item.image.width,
              }}
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
