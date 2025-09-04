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

const items = [
  { label: "OpenSourceCodeAvailableOnGithub" },
  { label: "ComplianceWithInternationalSecurityStandards" },
  { label: "ThreeLevelsOfEncryption" },
  { label: "SecureAccessAndMonitoringTools" },
  { label: "ExtraDocumentPermissions" },
];

const SecurityFirst = ({ id, className }: ISecurityFirst) => {
  const { t } = useTranslation("SecurityFirst");

  return (
    <Section
      id={id}
      className={className}
      background="#333333"
      desktopSpacing={["55px", "55px"]}
      tabletSpacing={["80px", "80px"]}
    >
      <Container maxWidth="1240px">
        <StyledSecurityFirst>
          <StyledSecurityFirstImage
            $image={t("SecurityFirstImage")}
            $image2x={t("SecurityFirstImage2x")}
          />
          <StyledSecurityFirstContent>
            <Heading level={2} size={2} color="#ffffff">
              <Trans
                t={t}
                i18nKey="SecurityFirst"
                components={[<Text as="span" color="main" key={0} />]}
              />
            </Heading>
            <StyledSecurityFirstList>
              {items.map((item, index) => (
                <li key={index}>{t(item.label)}</li>
              ))}
            </StyledSecurityFirstList>
            <StyledSecurityFirstLink
              id="security-first-learn-more"
              href="/security"
              label={t("LearnMoreAboutOOSecurityFeatures")}
              color="main"
              textUnderline
              hover="underline-none"
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
