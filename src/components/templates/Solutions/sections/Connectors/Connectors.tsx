import { useTranslation } from "next-i18next";
import {
  StyledBottomArea,
  StyledConnector,
  StyledContainer,
  StyledConnectorsList,
} from "./Connectors.styled";
import { Heading } from "@src/components/ui/Heading";

import { connectors } from "./data/connectors";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const Connectors = () => {
  const { t } = useTranslation("solutions");

  return (
    <Section>
      <StyledContainer>
        <Heading level={2} label={t("AnyPlatform")} />

        <StyledConnectorsList>
          {connectors.map((connector, index) => (
            <StyledConnector
              key={index}
              as={connector.href ? Link : "div"}
              href={connector.href}
              $backgroundPositionX={connector.backgroundPositionX}
              $width={connector.width}
            />
          ))}
        </StyledConnectorsList>
        <StyledBottomArea>
          <Button
            as="a"
            href="/all-connectors"
            variant="tertiary"
            label={t("CheckIntegrations")}
          />
        </StyledBottomArea>
      </StyledContainer>
    </Section>
  );
};

export { Connectors };
