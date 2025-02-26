import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledOtherConnectors,
  StyledOtherConnectorsWrapper,
  StyledOtherConnectorsItems,
  StyledOtherConnectorsBlock,
  StyledOtherConnectorsList,
} from "./OtherConnectors.styled";
import { IOtherConnectors } from "./OtherConnectors.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { connectors } from "./data/connectors";
import { develop } from "./data/develop";
import { partners } from "./data/partners";

const OtherConnectors = ({ id, className }: IOtherConnectors) => {
  const { t } = useTranslation("connectors");
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
                <Button
                  id={`connector-${item.id}`}
                  className={`connector-btn ${
                    router.pathname === item.url ? "active" : ""
                  }`}
                  as="a"
                  href={item.url}
                  title={item.title}
                  variant="quaternary"
                >
                  <span
                    className={`connector-img-btn connector-img-btn--${item.id}`}
                  ></span>
                </Button>
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
                  <Button
                    className={`connector-link ${
                      router.pathname === item.url ? "active" : ""
                    }`}
                    as="a"
                    href={item.url}
                    label={item.name}
                    title={item.name}
                    variant="tertiary"
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
                  <Button
                    className="connector-link connector-link--partners"
                    label={item.title}
                    title={item.title}
                    variant="tertiary"
                    tabIndex={-1}
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
