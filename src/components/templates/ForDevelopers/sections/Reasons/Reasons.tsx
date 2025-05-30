import { Trans, useTranslation } from "next-i18next";
import {
  StyledDocumentWrapper,
  StyledDocumentContent,
  StyledDocumentHeading,
  StyledDocumentText,
  StyledDocumentImage,
} from "./Reasons.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const Reasons = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledDocumentWrapper>
          <Heading label={t("ReasonsToJoin")} level={2} textAlign="center" />

          <StyledDocumentContent>
              <StyledDocumentText label={t("CollaborativeOnline")} />

            <div>
            <StyledDocumentHeading
              level={2}
              label={t("PartOfOODocsDeveloper")}
            />
            <StyledDocumentText>
              <Trans
                t={t}
                i18nKey="BringAdvancedDocument"
                components={[
                  <Link
                    href="/developer-edition"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                ]}
              />
            </StyledDocumentText>
            <Button
              as="a"
              href="mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20Conversion%20API%20request"
              label={t("GetInTouch")}
            />
          </div>
          <StyledDocumentImage />
          </StyledDocumentContent>
        </StyledDocumentWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
