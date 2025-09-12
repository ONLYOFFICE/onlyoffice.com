import { useTranslation, } from "next-i18next";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StyledFeaturesWrapper, StyledHeading } from "./Features.styled";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const Features = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <Section background="#f5f5f5">
      <Container>
        <StyledHeading level={2} color="#333333" textAlign="center">
          {t("FeatureTitle")}
        </StyledHeading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureImageItem
              fontSize="16px"
              key={index}
              contentWidth={item.contentWidth}
              heading={t(String(item.heading))}
              rowGap={16}
              gap={item.gap}
              marginTop={item.marginTop}
              text={t(String(item.text))}
              position={{ desktop: index % 2 === 1 ? "left" : "right" }}
              links={item.links?.map((link) => ({
                ...link,
                href: `${link.href}`,
                label: t(String(link.label)),
              }))}
              image={{
                url: (item.image.url),
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
