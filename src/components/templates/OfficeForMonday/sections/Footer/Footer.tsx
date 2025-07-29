import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledFooterContainer,
  StyledFooter
} from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <Section 
      desktopSpacing={["48px", "48px"]}
      tabletSpacing={["0px", "0px"]}
      tabletSmallSpacing={["0px", "0px"]}
      mobileSpacing={["0px", "0px"]}
      background=" #F5F7FB;"
    >
      <StyledFooterContainer>
        <StyledFooter>
          <Text>{t("AscensioSystem")}</Text>
        </StyledFooter>
      </StyledFooterContainer>
    </Section>
  );
};

export { Footer };
