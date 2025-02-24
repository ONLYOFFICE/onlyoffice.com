import { useTranslation } from "next-i18next";
import {
  StyledConnectAppWrapper,
  StyledConnectAppHeading,
} from "./ConnectApp.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

const ConnectApp = () => {
  const { t } = useTranslation("all-connectors");

  return (
    <Section>
      <Container>
        <StyledConnectAppWrapper>
          <StyledConnectAppHeading level={3} label={t("NeedAnAppToConnect")} />
          <Button
            as="a"
            href="mailto:sales@onlyoffice.com"
            label={t("LetUsKnow")}
          />
        </StyledConnectAppWrapper>
      </Container>
    </Section>
  );
};

export { ConnectApp };
