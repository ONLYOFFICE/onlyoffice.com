import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import { StyledHeroButtonsWrapper, StyledHeroHeading, StyledHeroSection } from "./Hero.styled";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("customers");

  return (
    <StyledHeroSection background="#F5F5F5">
      <Container>
        <StyledHeroHeading size={2} level={1} textAlign="center">
          <Trans key={0} t={t} i18nKey={"HeroHeadingOnlyOffice"} components={[
              <Text as="span" color="main" key={0} />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroButtonsWrapper>
          <Button label={t("HeroButtonTellYour")} />
          <Text as={"span"} label="or" size={3} />
          <Button label={t("HeroButtonStartYour")} variant="tertiary" />
        </StyledHeroButtonsWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };