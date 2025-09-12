import { Container } from "@src/components/ui/Container";
import { useTranslation } from "next-i18next";
import {
  ProtectBlock,
  StyledHeading,
  StyledSection,
} from "./Protect.styled";
import { Button } from "@src/components/ui/Button";

const Protect = () => {
  const { t } = useTranslation("private-rooms");

  return (
    <StyledSection
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <Container>
        <ProtectBlock>
          <StyledHeading label={t("ProtectYourSensitive")} />
          <Button as="a" variant="quaternary" href="/download-desktop">
            {t("TryNow")}
          </Button>
        </ProtectBlock>
      </Container>
    </StyledSection>
  );
};

export { Protect };
