import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import React from "react";
import {
  StyledFeaturesItem,
  StyledFeaturesWrapper,
  StyledFeatureContent,
  StyledFeatureButtons,
  StyledFeatureImage,
} from "./Features.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { useTranslation } from "next-i18next";

const Features = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <Section
      desktopSpacing={["112px", "124px"]}
      tabletSmallSpacing={["72px", "72px"]}
    >
      <Container>
        <StyledFeaturesWrapper>
          <StyledFeaturesItem>
            <StyledFeatureContent>
              <Heading level={3} label={t("SecureForSensitiveDocuments")} />
              <Text label={t("ProtectYourFiles")} />
            </StyledFeatureContent>
            <StyledFeatureImage
              className="secure"
              $imgUrl={t("SecureImgUrl")}
              $imgUrl2x={t("SecureImgUrl2x")}
            />
          </StyledFeaturesItem>
          <StyledFeaturesItem>
            <StyledFeatureContent>
              <Heading level={3} label={t("ConvenientForMultipleCoAuthors")} />
              <Text label={t("CollaborateEffectively")} />
              <Link
                id="docs-learn-more"
                href="/office-suite"
                label={t("LearnMore")}
                fontSize="16px"
                lineHeight="26px"
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledFeatureContent>
            <StyledFeatureImage
              className="convenient"
              $imgUrl={t("ConvenientImgUrl")}
              $imgUrl2x={t("ConvenientImgUrl2x")}
            />
          </StyledFeaturesItem>
          <StyledFeaturesItem>
            <StyledFeatureContent>
              <Heading level={3} label={t("CostEffectiveForAnyBudget")} />
              <Text label={t("PayForAdminsOnlyAndAdd")} />
            </StyledFeatureContent>
            <StyledFeatureImage
              className="budget"
              $imgUrl={t("BudgetImgUrl")}
              $imgUrl2x={t("BudgetImgUrl2x")}
            />
          </StyledFeaturesItem>
          <StyledFeatureButtons>
            <Button
              id="features-register-a-free-account"
              as="a"
              href=""
              label={t("RegisterAFreeAccount")}
            />
            <Button
              id="features-try-on-premise"
              as="a"
              href=""
              variant="secondary"
              label={t("TryOnPremise")}
            />
          </StyledFeatureButtons>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
