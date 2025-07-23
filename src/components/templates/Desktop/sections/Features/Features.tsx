import {
  StyledContainer,
  StyledSubHeading,
  StyledCardContainer,
  StyledCardBody,
  StyledCardImage,
  StyledCardHeading,
  StyledText,
} from "./Features.styled";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";

const Features = () => {
  const { t } = useTranslation("desktop");

  return (
    <Section background="#f9f9f9">
      <StyledContainer maxWidth="1120px">
        <Heading level={2}>
          <Trans
            t={t}
            i18nKey={"OnePackTitle"}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
        <StyledSubHeading>{t("OnePackSubtitle")}</StyledSubHeading>
        <Heading level={4}>
          {t("HighCompatibilityTitle")}
        </Heading>
        <StyledCardContainer>
          {items.map((item, index) => (
            <StyledCardBody key={index} href={item.href}>
              <StyledCardImage $positionX={item.positionX} />
              <StyledCardHeading level={4}>{t(item.heading)}</StyledCardHeading>
              <Text size={4}>{t(item.description)}</Text>
              <StyledText>{t("LearnMore")}</StyledText>
            </StyledCardBody>
          ))}
        </StyledCardContainer>
      </StyledContainer>
    </Section>
  );
};

export { Features };
