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
import { Link } from "@src/components/ui/Link";

const MarketplaceConnector = () => {
  const { t } = useTranslation("office-for-nuxeo");

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
                components={[
                  <Link
                    key="0"
                    href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/onlyoffice-nuxeo?version=1.0.0"
                    target="_blank"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            </Text>
            <Button
              variant="quaternary"
              id="marketplace-connector-get-it-now"
              as="a"
              target="_blank"
              href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/onlyoffice-nuxeo?version=1.0.0"
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
