import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import { StyledAscensioHeading, StyledAscensioText } from "./Ascensio.styled";

const Ascensio = () => {
  const { t } = useTranslation("about");
  const rawDescriptions = t("AscensioDescriptions", { returnObjects: true });
  const descriptionsContent = Array.isArray(rawDescriptions) ? rawDescriptions : [rawDescriptions];

  return (
    <Section>
      <Container maxWidth="1013px">
        <StyledAscensioHeading size={3} level={2} textAlign="center">
          <Trans t={t} i18nKey={"AscensioSystem"} components={[
            <Text key={0} as="span" color="main" />
          ]} />
        </StyledAscensioHeading>
        {descriptionsContent.map((description) => (
          <StyledAscensioText key={description} textAlign="center" size={1}>
            <Trans t={t} i18nKey={description} components={[
              <Link key={0} color="main" hover="underline-none" textUnderline={true} href={t("AscensioDescriptionsTextLink1")} />,
              <Link key={1} color="main" hover="underline-none" textUnderline={true} href="/contribute" />,
              <Link key={2} color="main" hover="underline-none" textUnderline={true} href="/vacancies" />
            ]} />
          </StyledAscensioText>
        ))}
      </Container>
    </Section>
  );
};

export { Ascensio };