import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import { StyledHeroButtonsWrapper, StyledHeroHeading } from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("customers");

  return (
    <Section>
      <Container>
        <StyledHeroHeading size={2} level={1} textAlign="center">
          <Trans key={0} t={t} i18nKey={"HeroHeadingOnlyOffice"} components={[
              <Text as="span" color="main" key={0} />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroButtonsWrapper>
          <Button label={t("HeroButtonTellYour")} borderRadius="3px" />
          <Text as={"span"} label="or" size={3} />
          <Button label={t("HeroButtonStartYour")} borderRadius="3px" variant="tertiary" />
        </StyledHeroButtonsWrapper>
      </Container>
    </Section>
  );
};

export { Hero };