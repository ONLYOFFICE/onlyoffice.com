import {
  StyledButtonContainer,
  StyledContainer,
  StyledContentWrapper,
  StyledSuggestionsDescription,
  StyledSuggestionsTitle,
  StyledBackgroundImage,
} from "./Suggestions.styled";
import { useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";

const Suggestions = () => {
  const { t } = useTranslation("accessibility");
  return (
    <StyledContainer>
      <StyledBackgroundImage />
      <StyledContentWrapper>
        <StyledSuggestionsTitle>{t("SuggestionsTitle")}</StyledSuggestionsTitle>
        <StyledSuggestionsDescription>
          {t("SuggestionsDescription")}
        </StyledSuggestionsDescription>
        <StyledButtonContainer>
          <Button
            as="a"
            variant="quinary"
            id="suggestions-github-button"
            href="https://github.com/ONLYOFFICE/DocumentServer/issues"
            label={t("GithubButtonLabel")}
          />
          <Button
            as="a"
            variant="quinary"
            id="suggestions-forum-button"
            href="https://forum.onlyoffice.com/"
            label={t("ForumButtonLabel")}
          />
        </StyledButtonContainer>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export { Suggestions };
