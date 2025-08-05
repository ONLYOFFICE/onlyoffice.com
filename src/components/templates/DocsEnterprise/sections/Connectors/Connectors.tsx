import { Trans, useTranslation } from "next-i18next";
import {
  StyledBottomArea,
  StyledConnector,
  StyledContainer,
  StyledConnectorsList,
  StyledShowMore,
  StyledText,
} from "./Connectors.styled";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { useState } from "react";

import { connectors } from "./data/connectors";
import { Section } from "@src/components/ui/Section";

const Connectors = () => {
  const { t } = useTranslation("docs-enterprise");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Section background="#F9F9F9">
      <StyledContainer>
        <Heading level={2}>
          <Trans t={t} i18nKey={String(t("ConnectorsHeader"))} />
        </Heading>
        <StyledText>
          <Trans
            t={t}
            i18nKey={String(t("ConnectorsText"))}
            components={[
              <Link
                key={0}
                href="/docspace"
                textUnderline
                color="main"
                hover="underline-none"
              />,
              <Link
                key={1}
                href="/workspace-enterprise"
                textUnderline
                color="main"
                hover="underline-none"
              />,
            ]}
          />
        </StyledText>

        <StyledConnectorsList>
          {connectors.slice(0, 22).map((connector, index) => (
            <StyledConnector
              key={index}
              href={connector.href}
              $backgroundPositionY={connector.backgroundPositionY}
              $width={connector.width}
            />
          ))}

          {isVisible &&
            connectors
              .slice(22)
              .map((connector, index) => (
                <StyledConnector
                  key={22 + index}
                  href={connector.href}
                  $backgroundPositionY={connector.backgroundPositionY}
                  $width={connector.width}
                />
              ))}
        </StyledConnectorsList>
        <StyledBottomArea>
          <StyledShowMore
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            $transformIcon={isVisible ? "rotate(180deg)" : "rotate(0deg)"}
          >
            {isVisible ? t("ConnectorsShowLess") : t("ConnectorsShowMore")}
          </StyledShowMore>
          <Link
            href="/all-connectors"
            textUnderline
            color="main"
            hover="underline-none"
            font-size="16px"
            label={t("ViewAllIntegrations")}
          />
        </StyledBottomArea>
      </StyledContainer>
    </Section>
  );
};

export { Connectors };
