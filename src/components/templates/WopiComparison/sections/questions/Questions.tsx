import {
  StyledQuestionsWrapper,
  StyledQuestionsHeader,
  StyledQuestionsParagraph,
} from "./Questions.styled";
import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";

const Questions = () => {
  const { t } = useTranslation("wopi-comparison");

  return (
    <StyledQuestionsWrapper>
      <Container>
        <StyledQuestionsHeader level={3}>{t("QuestionsHeader")}</StyledQuestionsHeader>
        <StyledQuestionsParagraph>
          {t("QuestionsParagraph")}
        </StyledQuestionsParagraph>
        <StyledQuestionsParagraph>
          <Trans
            t={t}
            i18nKey="QuestionsContact"
            components={[
              <Link
                href="mailto:sales@onlyoffice.com"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />
            ]}
          />
        </StyledQuestionsParagraph>
      </Container>
    </StyledQuestionsWrapper>
  );
};

export { Questions };
