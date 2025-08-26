import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuestionsContainer,
  StyledQuestionsText,
  StyledQuestionsTitle,
  StyledQuestionsWrapper,
} from "./Questions.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const Questions = () => {
  const { t } = useTranslation("automation-api");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]} background="#f9f9f9">
      <StyledQuestionsContainer>
        <StyledQuestionsWrapper>
          <StyledQuestionsTitle level={3} label={t("HaveAnyQuestions")} />
          <StyledQuestionsText>
            <Trans
              t={t}
              i18nKey="HaveAnyQuestionsText"
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
                <Link
                  href="mailto:support@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="1"
                  target="_blank"
                />,
                <br key="2" />
              ]}
            />
          </StyledQuestionsText>
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
