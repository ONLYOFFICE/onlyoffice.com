import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import { StyledContributeHeading } from "./Contribute.styled";

const Contribute = () => {
  const { t } = useTranslation("webinars");

  return (
    <Section
      desktopSpacing={["112px", "224px"]}
      tabletSpacing={["88px", "224px"]}
      tabletSmallSpacing={["80px", "224px"]}
      mobileSpacing={["48px", "224px"]}
    >
      <Container>
        <StyledContributeHeading size={2} label={t("ContributeHeading")} />
        <Text size={1} label={t("ContributeTextHave")} />
        <Text size={1}>
          <Trans
            t={t}
            i18nKey={"ContributeTextGet"}
            components={[
              <Link
                key={0}
                href="mailto:press@onlyoffice.com"
                color="main"
                textUnderline={true}
                hover="underline-none"
              />,
              <Link
                key={1}
                href="https://twitter.com/only_office"
                color="main"
                textUnderline={true}
                hover="underline-none"
                target="_blank"
              />
            ]}
          />
        </Text>
      </Container>
    </Section>
  );
};

export { Contribute };