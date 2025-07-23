import { useTranslation, Trans } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuestionsContainer,
  StyledQuestionsText,
  StyledQuestionsTitle,
  StyledQuestionsWrapper,
} from "./Questions.styled";

const Questions = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]} background="#333333">
      <StyledQuestionsContainer>
        <StyledQuestionsWrapper>
          <StyledQuestionsTitle level={3} label={t("QuestionHead")} />
          <StyledQuestionsText>
            <Trans
              i18nKey={t("QuestionSub")}
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  key="0"
                  target="_blank"
                  style={{ color: "#ff6f3d", textDecoration: "underline" }}
                />,
              ]}
            />
          </StyledQuestionsText>
        </StyledQuestionsWrapper>
      </StyledQuestionsContainer>
    </Section>
  );
};

export { Questions };
