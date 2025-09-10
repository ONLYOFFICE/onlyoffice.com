import { useTranslation, Trans } from "next-i18next";
import {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
  StyledText,
} from "./MarketplaceConnector.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const MarketplaceConnector = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <StyledMarketplaceConnector>
      <Container>
        <StyledMarketplaceConnectorWrapper>
          <StyledMarketplaceConnectorBody>
            <Heading level={3} color="#ffffff" label={t("WouldLikeToEnter")} />
            <StyledText size={2} color="#ffffff">
              <Trans
                t={t}
                i18nKey="ContactUsAtMail"
                components={[
                  <Link
                    key="0"
                    href="mailto:sales@onlyoffice.com"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            </StyledText>
            <Button
              id="technology-partners-contact-us"
              as="a"
              href="mailto:sales@onlyoffice.com"
              label={t("ContactUs")}
            />
          </StyledMarketplaceConnectorBody>
          <StyledMarketplaceConnectorImg />
        </StyledMarketplaceConnectorWrapper>
      </Container>
    </StyledMarketplaceConnector>
  );
};

export { MarketplaceConnector };
