import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledCompatibilityExample,
  StyledCompatibilityExamplesWrapper,
  StyledCompatibilityCompanySwitcher,
  StyledCompatibilityCompanySwitcherItem,
  StyledCompatibilitySwitcher,
  StyledCompatibilitySwitcherItem,
  StyledCompatibilityTop,
  StyledCompatibilityTopTextLink,
  StyledCompatibilityDetails,
} from "./BestAlternativeCompatibility.styled";
import { useState } from "react";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IBestAlternativeCompatibility } from "./BestAlternativeCompatibility.types";

const BestAlternativeCompatibility = ({
  alternative,
  items,
  details,
}: IBestAlternativeCompatibility) => {
  const { t } = useTranslation("BestAlternativeCompatibility");
  const [isDocx, setIsDocx] = useState<boolean>(true);
  const [isOnlyOffice, setIsOnlyOffice] = useState<boolean>(true);

  return (
    <Section background="#F5F5F5">
      <Container>
        <StyledCompatibilityTop>
          <Heading
            level={2}
            size={3}
            label={t("CheckOutTheCompatibility")}
            textAlign="center"
          />
          <Text size={2}>
            <Trans
              t={t}
              i18nKey={"CheckOutTheCompatibilityText"}
              components={[
                <StyledCompatibilityTopTextLink
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5896670&doc=blUwODJPUnl2Y2Fkb2FPNGRpazZML2c2QWptRjJaUklrMmN6cklzM0d5MD0_IjU4OTY2NzAi0"
                  color="main"
                  $type="docx"
                  textUnderline
                  target="_blank"
                  hover="underline-none"
                  key="0"
                />,
                <StyledCompatibilityTopTextLink
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=6125245&doc=b1NnVTZVSitUVkVRMlVMSDJZdDI2ekxZWnhaYmxVWjBOUHlUNThrZUlubz0_IjYxMjUyNDUi0"
                  color="main"
                  $type="xlsx"
                  textUnderline
                  target="_blank"
                  hover="underline-none"
                  key="1"
                />,
              ]}
            />
          </Text>
        </StyledCompatibilityTop>
        <StyledCompatibilitySwitcher>
          <StyledCompatibilitySwitcherItem
            $isDocx={isDocx}
            $type="documents"
            onClick={() => setIsDocx(true)}
          >
            {t("Documents")}
          </StyledCompatibilitySwitcherItem>
          <StyledCompatibilitySwitcherItem
            $isDocx={!isDocx}
            $type="spreadsheets"
            onClick={() => setIsDocx(false)}
          >
            {t("Spreadsheets")}
          </StyledCompatibilitySwitcherItem>
        </StyledCompatibilitySwitcher>

        <StyledCompatibilityCompanySwitcher>
          <StyledCompatibilityCompanySwitcherItem
            $isOO={isOnlyOffice}
            $type="onlyOffice"
            $logo="/images/modules/best-alternative/best-alternative-compatibility/logo_onlyoffice.svg"
            onClick={() => setIsOnlyOffice(true)}
          >
            ONLYOFFICE
          </StyledCompatibilityCompanySwitcherItem>
          <StyledCompatibilityCompanySwitcherItem
            $isOO={!isOnlyOffice}
            $type="alternative"
            $logo={alternative.logo.src}
            $logoWidth={alternative.logo.width}
            onClick={() => setIsOnlyOffice(false)}
          >
            {alternative.label}
          </StyledCompatibilityCompanySwitcherItem>
        </StyledCompatibilityCompanySwitcher>

        <StyledCompatibilityExamplesWrapper>
          {items.map((item) => {
            return (
              <StyledCompatibilityExample
                key={item.type}
                $isOO={isOnlyOffice}
                $isDocx={isDocx}
                $type={item.type}
              >
                <iframe src={item.src} width="100%" height="100%" />
              </StyledCompatibilityExample>
            );
          })}
        </StyledCompatibilityExamplesWrapper>
        {details && (
          <StyledCompatibilityDetails size={2} textAlign="center">
            {details}
          </StyledCompatibilityDetails>
        )}
      </Container>
    </Section>
  );
};

export { BestAlternativeCompatibility };
