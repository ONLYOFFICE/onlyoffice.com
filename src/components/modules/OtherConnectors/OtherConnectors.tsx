import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledOtherConnectors,
  StyledOtherConnectorsWrapper,
  StyledOtherConnectorsItems,
  StyledOtherConnectorsItem,
  StyledOtherConnectorsItemImg,
  StyledOtherConnectorsBlock,
  StyledOtherConnectorsList,
  StyledOtherConnectorsButton,
} from "./OtherConnectors.styled";
import { IOtherConnectors } from "./OtherConnectors.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { connectors } from "./data/connectors";
import { develop } from "./data/develop";
import { partners } from "./data/partners";

const OtherConnectors = ({ id, className }: IOtherConnectors) => {
  const { t } = useTranslation("Connectors");
  const router = useRouter();

  return (
    <StyledOtherConnectors
      id={id}
      className={className}
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <StyledOtherConnectorsWrapper>
          <Heading level={3} label={t("ExploreOtherConnectors")} />
          <StyledOtherConnectorsItems>
            {connectors.map((item, index) => (
              <li key={index}>
                <StyledOtherConnectorsItem
                  id={`connector-${item.id}`}
                  forwardedAs="a"
                  href={item.url}
                  title={item.name}
                  variant="quaternary"
                  $active={router.pathname === item.url}
                >
                  <StyledOtherConnectorsItemImg $id={item.id} />
                </StyledOtherConnectorsItem>
              </li>
            ))}
          </StyledOtherConnectorsItems>

          <StyledOtherConnectorsBlock>
            <Heading
              level={4}
              size={7}
              color="#444444"
              textTransform="uppercase"
              label={t("DevelopedByOO")}
            />
            <StyledOtherConnectorsList>
              {develop.map((item, index) => (
                <li key={index}>
                  <StyledOtherConnectorsButton
                    forwardedAs="a"
                    href={item.url}
                    label={item.name}
                    title={item.name}
                    variant="tertiary"
                    $active={router.pathname === item.url}
                  />
                </li>
              ))}
            </StyledOtherConnectorsList>
          </StyledOtherConnectorsBlock>

          <StyledOtherConnectorsBlock>
            <Heading
              level={4}
              size={7}
              color="#444444"
              textTransform="uppercase"
              label={t("ProvidedByPartners")}
            />
            <StyledOtherConnectorsList>
              {partners.map((item, index) => (
                <li key={index}>
                  <StyledOtherConnectorsButton
                    forwardedAs="span"
                    label={item.name}
                    title={item.name}
                    variant="tertiary"
                    $disabled={true}
                  />
                </li>
              ))}
            </StyledOtherConnectorsList>
          </StyledOtherConnectorsBlock>
        </StyledOtherConnectorsWrapper>
      </Container>
    </StyledOtherConnectors>
  );
};

export { OtherConnectors };
