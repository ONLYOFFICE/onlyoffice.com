import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledBlogCard,
  StyledBlogCardLink,
  StyledBlogCardText,
  StyledLearnMoreHeading,
  StyledLearnMoreWrapper,
} from "./LearnMore.styled";

const LearnMore = () => {
  const { t } = useTranslation("best-google-docs-alternative");
  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledLearnMoreWrapper>
          <StyledLearnMoreHeading
            level={3}
            size={4}
            textAlign="center"
            label={t("ReadTheseArticles")}
          />
          <StyledBlogCard>
            <img
              width="100%"
              src="/images/templates/best-google-docs-alternative/learn-more/onlyoffice-and-google-docs.jpg"
              alt="Google Docs and ONLYOFFICE Docs"
            />
            <div>
              <StyledBlogCardLink
                href={t("OOAndGoogleDocsLink")}
                label={t("OOAndGoogleDocs")}
                color="main"
                textUnderline
                hover="underline-none"
              />
              <StyledBlogCardText label={t("OOAndGoogleDocsText")} />
            </div>
          </StyledBlogCard>
        </StyledLearnMoreWrapper>
      </Container>
    </Section>
  );
};

export { LearnMore };
