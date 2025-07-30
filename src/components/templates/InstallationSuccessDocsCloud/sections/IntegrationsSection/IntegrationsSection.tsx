import { useTranslation } from "next-i18next";
import {
  StyledContainer,
  StyledDescription,
  StyledConnectorsList,
  StyledConnectorLink,
} from "./IntegrationsSection.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { connectors } from "./data/items";

export const IntegrationsSection = () => {
  const { t } = useTranslation("installation-success-docs-cloud");

  return (
    <Section>
      <StyledContainer>
        <Heading level={2}>{t("IntegrationsTitle")}</Heading>
        <StyledDescription>{t("IntegrationsDescription")}</StyledDescription>

        <StyledConnectorsList>
          {connectors.map((item, index) => (
            <StyledConnectorLink
              key={index}
              href={item.url}
              $positionX={item.positionX}
              target="_blank"
              rel="noreferrer"
              $iconUrl={item.iconUrl}
              $width={item.width}
            ></StyledConnectorLink>
          ))}
        </StyledConnectorsList>

        <Link
          href="/all-connectors"
          color="main"
          textUnderline
          hover="underline-none"
          fontSize="13px"
        >
          {t("IntegrationsMoreOptions")}
        </Link>
      </StyledContainer>
    </Section>
  );
};
