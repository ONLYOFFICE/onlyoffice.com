import { useTranslation, Trans } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import {
  StyledQuestionsContainer,
  StyledQuestionsText,
  StyledQuestionsTitle,
  StyledQuestionsWrapper
} from "./Support.styled";

const Support = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <StyledQuestionsContainer>
        <StyledQuestionsWrapper>
          <StyledQuestionsTitle level={3} label={t("QuestionHead")} />
          <StyledQuestionsText>
            <Trans
              i18nKey={t("QuestionSub")}
              components={[
                <Link
                  href="https://github.com/ONLYOFFICE/onlyoffice-docspace-monday/issues"
                  key="0"
                  target="_blank"
                  style={{ color: "#ff6f3d", textDecoration: "underline" }}
                />,
                <Link
                  href="https://forum.onlyoffice.com/"
                  key="1"
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

export { Support };
