import { useTranslation, Trans } from "next-i18next";
import { StyledFeaturesHeading, StyledFeaturesItems } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-sharepoint");

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
              key={index}
              mobileVariant="horizontal-icon-center"
              icon={{
                url: item.icon.url,
                positionX: item.icon.positionX,
                isSprite: true,
              }}
              text={
                <Trans
                  t={t}
                  i18nKey={String(item.text)}
                  components={[<b key="0" />]}
                />
              }
            />
          ))}
        </StyledFeaturesItems>
      </Container>
    </Section>
  );
};

export { Features };
