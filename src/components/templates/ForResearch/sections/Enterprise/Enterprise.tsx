import { Trans, useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledEnterpriseWrapper,
  StyledEnterpriseContent,
  StyledEnterpriseList,
  StyledQuoteWrapper,
  StyledQuoteText,
} from "./Enterprise.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const items = [
  { label: "AdvancedSetOfEditingTools" },
  { label: "EnhancedSecurityOptions" },
  { label: "PriorityAccessToSecurity" },
  { label: "EasilyScalable" },
  { label: "FreeTrialLifetimeLicense" },
];

const Enterprise = () => {
  const { t } = useTranslation("for-research");
  const logo = getAssetUrl("/images/templates/for-research/enterprise/logo_comment.svg");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
      background="#333333"
    >
      <Container>
        <StyledEnterpriseWrapper>
          <StyledEnterpriseContent>
            <Heading level={2} size={1} label="3" color="#808080" />
            <Heading level={3} size={4} color="#ffffff">
              <Trans
                t={t}
                i18nKey="EnterpriseHaed"
                components={[<Text as="span" color="main" key={0} />]}
              />
            </Heading>
            <Text label={t("EnterpriseSubitle")} color="#ffffff" />
            <StyledEnterpriseList>
              {items.map((item, index) => (
                <li key={index}>{t(item.label)}</li>
              ))}
            </StyledEnterpriseList>
          </StyledEnterpriseContent>
          <img
            src="/images/templates/for-research/enterprise/enterprise.svg"
            alt="Icon"
          />
        </StyledEnterpriseWrapper>
        <StyledQuoteWrapper>
          <img src={logo} alt="Icon" />
          <StyledQuoteText>{t("QuoteText3")}</StyledQuoteText>
          <Text
            fontSize="13px"
            fontWeight={700}
            lineHeight="21px"
            color="#aaaaaa"
            textAlign="center"
            label={t("QuoteAuthor3")}
          />
          <Text
            fontSize="12px"
            lineHeight="19px"
            color="#aaaaaa"
            textAlign="center"
            label={t("QuoteAuthorInfo3")}
          />
          <Link
            href={t("QuoteBlogLink3")}
            label={t("QuoteLink")}
            color="main"
            textUnderline
            hover="underline-none"
            target="_blank"
          />
        </StyledQuoteWrapper>
      </Container>
    </Section>
  );
};

export { Enterprise };
