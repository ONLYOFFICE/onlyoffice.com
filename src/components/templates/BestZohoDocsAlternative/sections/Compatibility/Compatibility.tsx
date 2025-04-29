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
  StyledCompatibilityHeading,
  StyledCompatibilityText,
  StyledCompatibilityTopTextLink,
  StyledCompatibilityExampleText,
} from "./Compatibility.styled";
import { useState } from "react";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Compatibility = () => {
  const { t } = useTranslation("best-zoho-docs-alternative");
  const [isDocx, setIsDocx] = useState<boolean>(true);
  const [isOnlyOffice, setIsOnlyOffice] = useState<boolean>(true);

  return (
    <Section background="#F5F5F5">
      <Container>
        <StyledCompatibilityTop>
          <StyledCompatibilityHeading
            level={2}
            size={3}
            label={t("CheckOutTheCompatibility")}
            textAlign="center"
          />
          <StyledCompatibilityText>
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
          </StyledCompatibilityText>
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
            onClick={() => setIsOnlyOffice(true)}
          >
            ONLYOFFICE
          </StyledCompatibilityCompanySwitcherItem>
          <StyledCompatibilityCompanySwitcherItem
            $isOO={!isOnlyOffice}
            $type="zohoDocs"
            onClick={() => setIsOnlyOffice(false)}
          >
            Docs
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
        <StyledCompatibilityExampleText textAlign="center">
          <Trans
            t={t}
            i18nKey="WhatWentWrong"
            components={[
              <Link
                href="/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho.pdf"
                color="main"
                target="_blank"
                textUnderline
                hover="underline-none"
                key="0"
              />,
            ]}
          />
        </StyledCompatibilityExampleText>
      </Container>
    </Section>
  );
};

export { Compatibility };
