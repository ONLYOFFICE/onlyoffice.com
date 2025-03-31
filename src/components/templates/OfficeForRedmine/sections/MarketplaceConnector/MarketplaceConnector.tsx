import { useTranslation, Trans } from "next-i18next";
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
  const { t } = useTranslation("office-for-redmine");

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
            <Text size={1} color="#ffffff">
              <Trans
                t={t}
                i18nKey="MarketplaceConnectorDescription"
                components={[<a key="0" href="https://www.redmine.org/plugins/onlyoffice_redmine" target="_blank" style={{ color: '#fff' }} />]}
              />
            </Text>
            <Button
              variant="quaternary"
              id="marketplace-connector-get-it-now"
              as="a"
              target="_blank"
              href="https://www.redmine.org/plugins/onlyoffice_redmine"
              label={t("GetItNow")}
            />
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
