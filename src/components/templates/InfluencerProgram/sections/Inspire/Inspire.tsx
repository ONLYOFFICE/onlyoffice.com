import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledInspireContent,
  StyledInspireImage,
  StyledInspireWrapper,
} from "./Inspire.styled";
import { Link } from "@src/components/ui/Link";

const Inspire = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="InspireUsers"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>
        <StyledInspireWrapper>
          <StyledInspireImage />
          <StyledInspireContent>
            <Text size={1} label={t("AreYouABlogger")} />
            <Text size={1} label={t("HelpUs")} />
            <Link
              href="#faq"
              color="main"
              textUnderline
              hover="underline-none"
              label={t("Check")}
            />
          </StyledInspireContent>
        </StyledInspireWrapper>
      </Container>
    </Section>
  );
};

export { Inspire };
