import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledCompatibilityCompanySwitcher,
  StyledCompatibilityCompanySwitcherItem,
  StyledCompatibilityExample,
  StyledCompatibilityExamplesWrapper,
  StyledCompatibilitySwitcher,
  StyledCompatibilitySwitcherItem,
  StyledCompatibilityTop,
  StyledCompatibilityTopTextLink,
} from "./Compatibility.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { useState } from "react";
import { companies } from "./data/companies";
import { documents } from "./data/documents";

const Compatibility = () => {
  const { t } = useTranslation("document-editor-comparison");
  const [isDocx, setIsDocx] = useState<boolean>(true);
  const [company, setCompany] = useState<string>("onlyOffice");

  return (
    <Section background="#F5F5F5" tabletSpacing={["88px", "88px"]}>
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
          {companies.map((item, index) => (
            <StyledCompatibilityCompanySwitcherItem
              key={index}
              $selected={item.name.toLowerCase() === company.toLowerCase()}
              $logo={item.img.src}
              $logoWidth={item.img.width}
              onClick={() => setCompany(item.name)}
            >
              {item.text}
            </StyledCompatibilityCompanySwitcherItem>
          ))}
        </StyledCompatibilityCompanySwitcher>

        <StyledCompatibilityExamplesWrapper>
          {documents.map((item, index) => (
            <StyledCompatibilityExample
              key={index}
              $active={
                item.company.toLocaleLowerCase() === company.toLowerCase() &&
                item.isDocx === isDocx
              }
            >
              <iframe src={item.src} width="100%" height="100%" />
            </StyledCompatibilityExample>
          ))}
        </StyledCompatibilityExamplesWrapper>
      </Container>
    </Section>
  );
};

export { Compatibility };
