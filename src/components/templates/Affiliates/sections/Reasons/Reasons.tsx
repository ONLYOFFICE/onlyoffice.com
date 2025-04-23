import { useTranslation } from "next-i18next";
import {
  StyledReasonsItems,
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledReasonsBox,
  StyledReasonsSubtitle,
  StyledReasonsText,
  StyledReasonsLinks,
  StyledReasonsLink,
  StyledReasonsImage,
} from "./Reasons.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

const Reasons = () => {
  const { t } = useTranslation("affiliates");

  return (
    <Section tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledReasonsWrapper>
          <Heading label={t("ReasonsToJoin")} level={2} textAlign="center" />

          <StyledReasonsContent>
            <StyledReasonsBox>
              <StyledReasonsSubtitle label={t("InnovativeProduct")} level={3} />
              <StyledReasonsText label={t("CollaborativeOnline")} />

              <StyledReasonsLinks>
                <StyledReasonsLink
                  label={t("LearnMoreAboutOODocSpace")}
                  href="/docspace"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
                <StyledReasonsLink
                  href="/office-suite"
                  label={t("LearnMoreAboutOODocs")}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
              </StyledReasonsLinks>
            </StyledReasonsBox>

            <StyledReasonsImage />
          </StyledReasonsContent>

          <StyledReasonsItems>
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                variant="horizontal"
                icon={item.icon}
                heading={t(String(item.heading))}
                text={t(String(item.text))}
              />
            ))}
          </StyledReasonsItems>
        </StyledReasonsWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
