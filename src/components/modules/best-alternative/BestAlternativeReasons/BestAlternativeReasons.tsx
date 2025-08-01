import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledFeaturesHeading,
  StyledFeaturesWrapper,
} from "./BestAlternativeReasons.styled";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { IBestAlternativeReasons } from "./BestAlternativeReasons.types";

const BestAlternativeReasons = ({
  heading,
  items,
}: IBestAlternativeReasons) => {
  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesHeading
          level={2}
          textAlign="center"
          $maxWidth={heading.maxWidth}
        >
          {heading.label}
        </StyledFeaturesHeading>
        <StyledFeaturesWrapper>
          {items.map(({ variant, icon, heading, text }, index) => (
            <FeatureItem
              key={index}
              variant={variant || "horizontal"}
              mobileVariant="horizontal-icon-top"
              icon={icon}
              heading={heading}
              text={text}
            />
          ))}
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { BestAlternativeReasons };
