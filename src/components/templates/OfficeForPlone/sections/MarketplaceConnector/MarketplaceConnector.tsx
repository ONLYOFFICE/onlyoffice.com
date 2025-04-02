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
  const { t } = useTranslation("office-for-plone");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

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
                components={[<a key="0" href="https://pypi.org/project/onlyoffice.plone/#descriptione" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }} />, <a key="1" href="https://github.com/ONLYOFFICE/onlyoffice-plone" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }} />]}
              />
            </Text>
            <Button
              variant="quaternary"
              id="marketplace-connector-get-started"
              label={t("GetStarted")}
              onClick={() => scrollToBlock()}
            />
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
