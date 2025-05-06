import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";

import { StyledHeroHeading } from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("office-for-ios");
  return (
    <Section>
      <Container>
        <StyledHeroHeading size={2}>
          <Trans
            t={t}
            i18nKey="OnlyOfficeDocuments"
            components={[<Text key="0" as="span" color="main" label="0" />]}
          />
        </StyledHeroHeading>
      </Container>
    </Section>
  );
};

export { Hero };
