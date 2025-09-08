import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import { StyledFeatures, StyledHeading } from "./Features.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

const Features = () => {
  const { t } = useTranslation("private-rooms");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledHeading>
          <Trans
            t={t}
            i18nKey={"WhyONLYOFFICEIsTheSafest"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledHeading>

        <StyledFeatures>
          {items.map(({ icon, heading, text }, index) => (
            <FeatureItem
              key={index}
              className="feature-item"
              variant="vertical"
              mobileVariant="horizontal-icon-top"
              icon={icon}
              heading={t(String(heading))}
              text={t(String(text))}
            />
          ))}
        </StyledFeatures>
      </Container>
    </Section>
  );
};

export { Features };
