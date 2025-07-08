import { useTranslation, Trans } from "next-i18next";
import {
  StyledInstallationBlock,
  StyledInstallationContent,
  StyledInstallationText,
  StyledInstallationImage
} from "./Installation.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const Installation = () => {
  const { t } = useTranslation("office-for-monday");

return (
    <>
      <Section       
        desktopSpacing={["112px", "0px"]}
        tabletSmallSpacing={["88px", "0px"]}
        mobileSpacing={["48px", "0px"]}
      >

      <Container>
        <StyledInstallationBlock>
            <StyledInstallationContent>
              <StyledInstallationText>
                <Heading level={2} size={3} label={t("AppInstallation")} />
                  <Trans i18nKey={t("AppInstallationText")} components={[
                    <p key="0" />
                  ]} />
              </StyledInstallationText>
              <StyledInstallationImage
                src="/images/templates/office-for-monday/installation/screen_1@2x.png"
                alt="Screenshot"
              />
            </StyledInstallationContent>
          </StyledInstallationBlock>
        </Container>
      </Section>
    </>
  );
};

export { Installation };
