import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledComparisonCardsWrapper,
  StyledComparisonHeading,
} from "./Comparison.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { ComparisonCard } from "./sub-components/ComparisonCard";

const Comparison = () => {
  const { t } = useTranslation("document-editor-comparison");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledComparisonHeading level={2} size={4}>
          <Trans
            t={t}
            i18nKey="ComparisonTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledComparisonHeading>
        <StyledComparisonCardsWrapper>
          {items.map(({ logo, text, link }, index) => (
            <ComparisonCard
              key={index}
              logo={logo}
              text={t(text)}
              link={link}
            />
          ))}
        </StyledComparisonCardsWrapper>
      </Container>
    </Section>
  );
};

export { Comparison };
