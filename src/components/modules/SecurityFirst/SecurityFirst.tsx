import { Trans, useTranslation } from "next-i18next";
import { ISecurityFirst } from "./SecurityFirst.types";
import {
  StyledSecurityFirst,
  StyledSecurityFirstImage,
  StyledSecurityFirstContent,
  StyledSecurityFirstList,
  StyledSecurityFirstLink,
  StyledSecurityFirstFeatures,
} from "./SecurityFirst.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const SecurityFirst = ({ id, className }: ISecurityFirst) => {
  const { t } = useTranslation("security-first");

  const items = [
    { label: t("OpenSourceCodeAvailableOnGithub") },
    { label: t("ComplianceWithInternationalSecurityStandards") },
    { label: t("ThreeLevelsOfEncryption") },
    { label: t("SecureAccessAndMonitoringTools") },
    { label: t("ExtraDocumentPermissions") },
  ];

  return (
    <Section
      id={id}
      className={className}
      bgColor="#333333"
      desktopSpacing={["55px", "55px"]}
      tabletSpacing={["80px", "80px"]}
    >
      <Container maxWidth="1240px">
        <StyledSecurityFirst>
          <StyledSecurityFirstImage />
          <StyledSecurityFirstContent>
            <Heading level={2} size={2} color="#ffffff">
              <Trans
                t={t}
                i18nKey="SecurityFirst"
                components={[<Text as="span" color="#ff6f3d" key={0} />]}
              />
            </Heading>
            <StyledSecurityFirstList>
              {items.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </StyledSecurityFirstList>
            <StyledSecurityFirstLink
              href="/security"
              label={t("LearnMoreAboutOOSecurityFeatures")}
              color="main-color"
              textUnderline
              hover="text-underline-none"
            />
            <StyledSecurityFirstFeatures>
              <li></li>
              <li></li>
            </StyledSecurityFirstFeatures>
          </StyledSecurityFirstContent>
        </StyledSecurityFirst>
      </Container>
    </Section>
  );
};

export { SecurityFirst };
