import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuestionsContainer,
  StyledQuestionsText,
  StyledQuestionsTitle,
  StyledQuestionsWrapper,
  StyledQuestionsButtons,
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
          <StyledQuestionsButtons>
            <Button
              as="a"
              href="mailto:sales@onlyoffice.com"
              label={t("ContactUs")}
              textTransform="uppercase"
              fontSize="13px"
            />
            <Button
              as="a"
              href="/call-back-form"
              label={t("ScheduleATime")}
              variant="secondary"
              textTransform="uppercase"
              fontSize="13px"
            />
          </StyledQuestionsButtons>
        </StyledQuestionsWrapper>
      </StyledQuestionsContainer>
    </Section>
  );
};

export { Questions };
