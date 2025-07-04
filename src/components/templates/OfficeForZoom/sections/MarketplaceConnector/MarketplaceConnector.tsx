import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
  StyledMarketplaceConnectorBtn,
} from "./MarketplaceConnector.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const MarketplaceConnector = () => {
  const { t } = useTranslation("office-for-zoom");
  const { locale } = useRouter();

  const imageSrc =
    "/images/templates/office-for-zoom/marketplace-connector/zoom.svg";
  const imageSrc1 = "/images/templates/office-for-zoom/button.svg";
  const imageSrc2 = "/images/templates/office-for-zoom/icon.svg";

  return (
    <StyledMarketplaceConnector>
      <Container>
        <StyledMarketplaceConnectorWrapper>
          <StyledMarketplaceConnectorBody>
            <img src={imageSrc} alt="Zoom" />
            <Heading level={2} label={t("MarketplaceConnectorTitle")} />
            <Text size={1} label={t("MarketplaceConnectorDescription")} />
            <StyledMarketplaceConnectorBtn>
              <Button
                as="a"
                id="marketplace-add-to-zoom"
                href="https://marketplace.zoom.us/apps/OW6rOq-nRgCihG5eps_p-g"
              >
                <img
                  src={imageSrc1}
                  alt="Icon"
                  style={{ marginRight: "4px" }}
                />
                {t("AddToZoom")}
                {locale !== "zh" && (
                  <img
                    src={imageSrc2}
                    alt="Icon"
                    style={{
                      marginRight: "4px",
                      marginLeft: "4px",
                      marginTop: "2px",
                    }}
                  />
                )}
                {t("AddToZoomAfter")}
              </Button>
            </StyledMarketplaceConnectorBtn>
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
