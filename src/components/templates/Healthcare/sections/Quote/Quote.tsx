import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuoteAuthor,
  StyledQuoteAuthorPosition,
  StyledQuoteAuthorStory,
  StyledQuotePartnerLogo,
  StyledQuoteText,
  StyledQuoteWrapper,
} from "./Quote.styled";

const Quote = () => {
  const { t } = useTranslation("healthcare");

  return (
    <Section as="div" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledQuoteWrapper>
          <StyledQuotePartnerLogo
            src="/images/templates/education/quote/sacre-logo.png"
            alt="SACRÉ-CŒUR TRAVAIL"
          />
          <StyledQuoteText label={t("WeQuote")} />
          <StyledQuoteAuthor>{t("WeQuoteAuthor")}</StyledQuoteAuthor>
          <StyledQuoteAuthorPosition>
            {t("WeQuoteAuthorInfo")}
          </StyledQuoteAuthorPosition>
          <StyledQuoteAuthorStory
            href="https://www.onlyoffice.com/blog/2023/02/college-lycee-sacre-coeur-uses-onlyoffice-and-moodle"
            label={t("ReadSuccessStory")}
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledQuoteWrapper>
      </Container>
    </Section>
  );
};

export { Quote };
