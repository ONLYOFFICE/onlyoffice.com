import { useTranslation, Trans } from "next-i18next";
import {
  StyledDocSpaceRegistrationProxyImage,
  StyledDocSpaceRegistrationProxyWrapper,
  StyledDocSpaceRegistrationProxyText,
  StyledDocSpaceRegistrationProxyError,
} from "./DocSpaceRegistrationProxy.styled";
import { IDocSpaceRegistrationProxyTemplate } from "./DocSpaceRegistrationProxy.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const DocSpaceRegistrationProxyTemplate = ({
  errorMessage,
}: IDocSpaceRegistrationProxyTemplate) => {
  const { t } = useTranslation("docspace-registration-proxy");

  return (
    <Section>
      <Container maxWidth="696px">
        <StyledDocSpaceRegistrationProxyImage />

        <StyledDocSpaceRegistrationProxyWrapper>
          <Heading level={1} label={t("OopsSomethingWentRrong")} />

          <StyledDocSpaceRegistrationProxyText>
            <Trans t={t} i18nKey="TheLinkMightBeInvalidExpiredOrAlreadyUsed" />
          </StyledDocSpaceRegistrationProxyText>

          <Button
            as="a"
            href="/docspace-registration"
            label={t("BackToRegistrationPage")}
          />

          <StyledDocSpaceRegistrationProxyError>
            {errorMessage}
          </StyledDocSpaceRegistrationProxyError>
        </StyledDocSpaceRegistrationProxyWrapper>
      </Container>
    </Section>
  );
};

export { DocSpaceRegistrationProxyTemplate };
