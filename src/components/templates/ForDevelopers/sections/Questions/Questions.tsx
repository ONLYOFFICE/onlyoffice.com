import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuestionsContainer,
  StyledQuestionsText,
  StyledQuestionsTitle,
  StyledQuestionsWrapper,
} from "./Questions.styled";
import { Button } from "@src/components/ui/Button";

const Questions = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]} background="#f9f9f9">
      <StyledQuestionsContainer>
        <StyledQuestionsWrapper>
          <StyledQuestionsTitle level={3} label={t("HaveAnyQuestions")} />
          <StyledQuestionsText label={t("HaveAnyQuestionsText")} />
          <Button
            as="a"
            href="mailto:sales@onlyoffice.com"
            label={t("GetInTouch")}
            variant="secondary"
          />
        </StyledQuestionsWrapper>
      </StyledQuestionsContainer>
    </Section>
  );
};

export { Questions };
