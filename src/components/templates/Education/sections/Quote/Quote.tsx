import { useTranslation } from "next-i18next";
import * as S from "./Quote.styled";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";

const Quote = () => {
  const { t } = useTranslation("education");

  return (
    <Section as="div" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <S.StyledQuoteWrapper>
          <S.StyledQuotePartnerLogo
            src="/images/templates/education/quote/sacre-logo.png"
            alt="SACRÉ-CŒUR TRAVAIL"
          />
          <S.StyledQuoteText label={t("WeQuote")} />
          <S.StyledQuoteAuthor>{t("WeQuoteAuthor")}</S.StyledQuoteAuthor>
          <S.StyledQuoteAuthorPosition>
            {t("WeQuoteAuthorInfo")}
          </S.StyledQuoteAuthorPosition>
          <S.StyledQuoteAuthorStory
            href="https://www.onlyoffice.com/blog/2023/02/college-lycee-sacre-coeur-uses-onlyoffice-and-moodle"
            label={t("ReadSuccessStory")}
            color="main"
            textUnderline
            hover="underline-none"
          />
        </S.StyledQuoteWrapper>
      </Container>
    </Section>
  );
};

export { Quote };
