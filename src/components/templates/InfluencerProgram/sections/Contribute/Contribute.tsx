import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledContributeWrapper } from "./Contribute.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const Contribute = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section
      desktopSpacing={["80px", "80px"]}
      tabletSpacing={["80px", "80px"]}
      tabletSmallSpacing={["62px", "62px"]}
      mobileSpacing={["62px", "47px"]}
      background="#333333"
    >
      <Container maxWidth="928px">
        <StyledContributeWrapper>
          <Text label={t("LookingForOtherWays")} />
          <Link href="contribute" label={t("CheckThisPage")} textUnderline />
        </StyledContributeWrapper>
      </Container>
    </Section>
  );
};

export { Contribute };
