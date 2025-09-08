import {
  StyledButtonContainer,
  StyledContainer,
  StyledContentWrapper,
  StyledSuggestionsDescription,
  StyledSuggestionsTitle,
  StyledBackgroundImage,
} from "./Suggestions.styled";
import { Trans, useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const Suggestions = () => {
  const { t } = useTranslation("accessibility");
  return (
    <StyledContainer>
      <StyledBackgroundImage />
      <StyledContentWrapper>
        <StyledSuggestionsTitle>{t("SuggestionsTitle")}</StyledSuggestionsTitle>
        <StyledSuggestionsDescription>
          <Trans
            t={t}
            i18nKey="SuggestionsDescription"
            components={[
              <Link
                href="https://github.com/ONLYOFFICE/DocumentServer/issues"
                target="_blank"
                textUnderline
                hover="underline-none"
                key="0"
              />,
              <Link
                href="https://community.onlyoffice.com/"
                target="_blank"
                textUnderline
                hover="underline-none"
                key="1"
              />,
            ]}
          />
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
