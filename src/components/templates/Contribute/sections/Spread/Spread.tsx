import { useTranslation } from "next-i18next";
import { StyledSpreadContent, StyledSpreadText } from "./Spread.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
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
          <StyledSpreadText color="#666666" label={t("SpreadText")} />
          <Link
            href="https://api.onlyoffice.com/docs/docs-api/get-started/ready-to-use-connectors"
            fontSize="14px"
            lineHeight="22px"
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
