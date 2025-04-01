import { useTranslation, Trans } from "next-i18next";
import {
  StyledFeaturesWrapper,
  StyledFeaturesItems,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-sharepoint");

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <Heading level={2} textAlign="center" label={t("WhyOO")} />

          <StyledFeaturesItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
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
              />
            ))}
          </StyledFeaturesItems>

        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
