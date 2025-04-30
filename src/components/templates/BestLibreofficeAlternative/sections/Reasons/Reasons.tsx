import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledFeaturesHeading, StyledFeaturesWrapper } from "./Reasons.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

const Reasons = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="ReasonsTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFeaturesHeading>
        <StyledFeaturesWrapper>
          {items.map((item, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              icon={item.icon}
              heading={t(String(item.heading))}
              text={t(String(item.text))}
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
