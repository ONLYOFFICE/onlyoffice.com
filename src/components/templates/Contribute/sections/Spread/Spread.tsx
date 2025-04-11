import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledSpreadContent } from "./Spread.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Marquee } from "./sub-components/Marquee";

const Spread = () => {
  const { t } = useTranslation("contribute");
  return (
    <Section
      desktopSpacing={["136px", "136px"]}
      tabletSpacing={["128px", "128px"]}
      tabletSmallSpacing={["128px", "128px"]}
      mobileSpacing={["77px", "77px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledSpreadContent>
          <Heading level={2} size={3} label={t("SpreadTitle")} />
          <Text label={t("SpreadText")} />
          <Link
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
