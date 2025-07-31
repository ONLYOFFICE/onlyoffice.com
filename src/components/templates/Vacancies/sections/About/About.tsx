import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import {
  StyledAboutContent,
  StyledAboutImage,
  StyledAboutText
} from "./About.styled";

const About = () => {
  const { t } = useTranslation("vacancies");

  const rawTextContent = t("AboutContentText", {
    returnObjects: true
  }) as string | string[];
  const textContent = Array.isArray(rawTextContent) ? rawTextContent : [rawTextContent];

  return (
    <Section>
      <Container>
        <Heading label={t("AboutContentHeading")} size={4} level={2} />
        <StyledAboutContent>
          {textContent.map((item) => (
            <StyledAboutText key={item} size={1}>
              <Trans t={t} i18nKey={item} components={[
                <Text
                  key={0}
                  as="span"
                  fontWeight={700}
                />,
                <Link
                  key={1}
                  href="mailto:jobs@onlyoffice.com"
                  color="main"
                  fontWeight={700}
                  textUnderline={true}
                  hover="underline-none"
                />
              ]} />
            </StyledAboutText>
          ))}
        </StyledAboutContent>
      </Container>
      <StyledAboutImage />
    </Section>
  );
};

export { About };