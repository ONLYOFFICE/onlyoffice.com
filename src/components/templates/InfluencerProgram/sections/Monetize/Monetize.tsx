import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  StyledMonetizeContent,
  StyledMonetizeContentText,
  StyledMonetizeImage,
  StyledMonetizeWrapper,
} from "./Monetize.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Monetize = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="Monetize"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>
        <StyledMonetizeWrapper>
          <StyledMonetizeContent>
            <StyledMonetizeContentText size={1} label={t("WouldYouLike")} />
            <Button
              as="a"
              href="/affiliates"
              variant="secondary"
              label={t("StartNow")}
            />
          </StyledMonetizeContent>
          <StyledMonetizeImage />
        </StyledMonetizeWrapper>
      </Container>
    </Section>
  );
};

export { Monetize };
