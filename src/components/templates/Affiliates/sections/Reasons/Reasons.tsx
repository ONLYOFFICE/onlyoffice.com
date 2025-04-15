import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledReasonsSubtitle,
  StyledReasonsText,
  StyledReasonsLink,
  StyledReasonsImage,
} from "./Reasons.styled";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";
import { Heading } from "@src/components/ui/Heading";

const Reasons = () => {
  const { t } = useTranslation("affiliates");

  return (
    <Section tabletSpacing={["80px", "80px"]}>
      <Container>
        <Heading label={t("ReasonsToJoin")} level={2} textAlign="center" />
        <StyledReasonsContent>
          <StyledReasonsSubtitle label={t("InnovativeProduct")} level={4} />
          <StyledReasonsText label={t("CollaborativeOnline")} />
          <StyledReasonsLink
            label={t("LearnMoreAboutOODocSpace")}
            href="/docspace"
            color="main"
            textUnderline
            hover="underline-none"
          />
          <StyledReasonsLink
            className="second-link"
            href="/office-suite"
            label={t("LearnMoreAboutOODocs")}
            color="main"
            textUnderline
            hover="underline-none"
          />
          <StyledReasonsImage />
        </StyledReasonsContent>
        <StyledReasonsWrapper>
          {items.map((item, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              icon={item.icon}
              heading={t(item.heading ?? "")}
              text={t(String(item.text))}
            />
          ))}
        </StyledReasonsWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
