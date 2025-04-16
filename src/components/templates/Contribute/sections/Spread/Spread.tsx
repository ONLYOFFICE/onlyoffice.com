import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledSpreadContent,
  StyledSpreadLink,
  StyledSpreadText,
} from "./Spread.styled";
import { Heading } from "@src/components/ui/Heading";
import { Marquee } from "./sub-components/Marquee";

const Spread = () => {
  const { t } = useTranslation("contribute");
  return (
    <Section
      desktopSpacing={["136px", "136px"]}
      tabletSpacing={["136px", "136px"]}
      tabletSmallSpacing={["144px", "144px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledSpreadContent>
          <Heading level={2} size={3} label={t("SpreadTitle")} />
          <StyledSpreadText label={t("SpreadText")} />
          <StyledSpreadLink
            href="https://api.onlyoffice.com/docs/docs-api/get-started/ready-to-use-connectors"
            textUnderline
            hover="underline-none"
            color="main"
            target="_blank"
            label={t("SpreadLink")}
          />
        </StyledSpreadContent>
      </Container>
      <Marquee />
    </Section>
  );
};

export { Spread };
