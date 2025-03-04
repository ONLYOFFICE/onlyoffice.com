import { useTranslation } from "next-i18next";
import {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
} from "./MarketplaceConnector.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const MarketplaceConnector = () => {
  const { t } = useTranslation("office-for-moodle");

  return (
    <StyledMarketplaceConnector>
      <Container>
        <StyledMarketplaceConnectorWrapper>
          <StyledMarketplaceConnectorBody>
            <Heading
              level={2}
              color="#ffffff"
              label={t("MarketplaceConnectorTitle")}
            />
            <Text
              size={1}
              color="#f2f2f2"
              label={t("MarketplaceConnectorDescription")}
            />
            <Button
              id="marketplace-connector-get-free-app"
              as="a"
              target="_blank"
              href="https://dropbox.onlyoffice.com/oauth/redirect"
              label={t("GetStarted")}
            />
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
