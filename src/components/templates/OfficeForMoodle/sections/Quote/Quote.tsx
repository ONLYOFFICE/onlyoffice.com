import { useTranslation } from "next-i18next";
import { StyledQuoteText } from "./Quote.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Quote = () => {
  const { t } = useTranslation("office-for-moodle");

  return (
    <Section
      as="div"
      bgColor="#f9f9f9"
      desktopSpacing={["90px", "90px"]}
      mobileSpacing={["88px", "88px"]}
    >
      <Container maxWidth="736px">
        <StyledQuoteText>{t("QuoteText")}</StyledQuoteText>
        <Text
          fontSize="13px"
          fontWeight={700}
          lineHeight="21px"
          color="#666666"
          textAlign="center"
          label={t("QuoteAuthor")}
        />
        <Text
          fontSize="12px"
          lineHeight="19px"
          color="#aaaaaa"
          textAlign="center"
          label={t("QuoteAuthorInfo")}
        />
      </Container>
    </Section>
  );
};

export { Quote };
