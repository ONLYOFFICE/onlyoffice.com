import { useTranslation, Trans } from "next-i18next";
import {
  StyledRegistration,
  StyledRegistrationContent,
  StyledRegistrationIcon,
  StyledRegistrationButton,
} from "./Registration.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { useRouter } from "next/router";

const Registration = () => {
  const { t } = useTranslation("certificates");
  const locale = useRouter();

  return (
    <Section
      as="div"
      desktopSpacing={["0", "110px"]}
      tabletSpacing={["0", "110px"]}
      tabletSmallSpacing={["0", "100px"]}
      mobileSpacing={["0", "74px"]}
    >
      <Container>
        <StyledRegistration>
          <StyledRegistrationContent $locale={locale.locale}>
            <StyledRegistrationIcon />
            <Heading level={2}>
              <Trans
                t={t}
                i18nKey="OOUsers"
                components={[<Text as="span" color="main" key="0" />]}
              />
            </Heading>
          </StyledRegistrationContent>

          <StyledRegistrationButton
            id="certificates-users-button"
            label={t("StartInTheCloud")}
            forwardedAs="a"
            href="/docspace-registration"
          />
        </StyledRegistration>
      </Container>
    </Section>
  );
};

export { Registration };
