import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  StyledFeaturesHeader,
  StyledFeatures,
} from "./FeaturesIcons.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Heading } from "@src/components/ui/Heading";

const FeaturesIcons = () => {
  const { t } = useTranslation("for-research");

  return (
    <Section>
      <Container>
        <StyledFeaturesHeader>
          <Heading level={2} size={3}>
            <Trans
              t={t}
              i18nKey={"FeaturesIconsHeading"}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </Heading>
        </StyledFeaturesHeader>

        <StyledFeatures>
          {items.map(({ icon, heading, text }, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              mobileVariant="horizontal-icon-top"
              icon={icon}
              heading={t(String(heading))}
              text={
                <Trans
                  t={t}
                  i18nKey={String(text)}
                />
              }
            />
          ))}
        </StyledFeatures>
      </Container>
    </Section>
  );
};

export { FeaturesIcons };
