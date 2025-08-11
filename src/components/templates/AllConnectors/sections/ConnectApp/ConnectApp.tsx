import { useTranslation } from "next-i18next";
import {
  StyledConnectAppSection,
  StyledConnectAppWrapper,
  StyledConnectAppHeading,
  StyledConnectAppTImg
} from "./ConnectApp.styled";
import { Container } from "@src/components/ui/Container";
import {Link} from "@src/components/ui/Link"

const ConnectApp = () => {
  const { t } = useTranslation("all-connectors");

  return (
    <StyledConnectAppSection>
      <Container>
        <StyledConnectAppWrapper>
          <StyledConnectAppTImg />
          <StyledConnectAppHeading level={3} label={t("NeedAnAppToConnect")} />
          <Link
            id="connect-app-let-us-know"
            href="mailto:sales@onlyoffice.com"
            label={t("LetUsKnow")}
            color="main"
            fontSize="18px"
            textUnderline={true}
            hover="underline-none"
          />
        </StyledConnectAppWrapper>
      </Container>
    </StyledConnectAppSection>
  );
};

export { ConnectApp };
