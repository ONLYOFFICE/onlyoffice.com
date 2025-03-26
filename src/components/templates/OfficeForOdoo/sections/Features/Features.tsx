import { useTranslation, Trans } from "next-i18next";
import { StyledFeaturesHeading, StyledFeaturesItems } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

const Features = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <Section>
      <Container>
        <StyledFeaturesHeading
          level={2}
          textAlign="center"
          label={t("WhyOO")}
        />

        <StyledFeaturesItems>
          {items.map((item, index) => (
            <FeatureItem
              icon={{
                url: item.icon.url,
                positionX: item.icon.positionX,
              }}
              heading={
                <Trans
                  t={t}
                  i18nKey={String(item.heading)}
                  components={[<b key="0" />]}
                />
              }
              key={index}
            />
          ))}
        </StyledFeaturesItems>
      </Container>
    </Section>
  );
};

export { Features };
