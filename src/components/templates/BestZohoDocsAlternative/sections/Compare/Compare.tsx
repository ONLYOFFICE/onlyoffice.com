import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledCompareButtonWrapper,
  StyledCompareContent,
  StyledCompareLink,
  StyledCompareText,
  StyledCompareTextLink,
  StyledCompareWrapper,
} from "./Compare.styled";
import { Button } from "@src/components/ui/Button";

const Compare = () => {
  const { t } = useTranslation("best-zoho-docs-alternative");

  return (
    <Section>
      <Container>
        <StyledCompareWrapper>
          <Heading label={t("StillNotConvinced")} level={3} size={4} />
          <StyledCompareContent>
            <StyledCompareText>
              <Trans
                t={t}
                i18nKey={"StillNotConvincedText"}
                components={[
                  <StyledCompareTextLink
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5896670&doc=blUwODJPUnl2Y2Fkb2FPNGRpazZML2c2QWptRjJaUklrMmN6cklzM0d5MD0_IjU4OTY2NzAi0"
                    color="main"
                    $type="docx"
                    textUnderline
                    hover="underline-none"
                    target="_blank"
                    key="0"
                  />,
                  <StyledCompareTextLink
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=6125245&doc=b1NnVTZVSitUVkVRMlVMSDJZdDI2ekxZWnhaYmxVWjBOUHlUNThrZUlubz0_IjYxMjUyNDUi0"
                    color="main"
                    $type="xlsx"
                    textUnderline
                    hover="underline-none"
                    target="_blank"
                    key="1"
                  />,
                ]}
              />
            </StyledCompareText>
            <StyledCompareLink
              href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5046061&doc=R3pDTVJIMjdhTWRRNjFQL1JsNFdhcWR5c01lTHFkNkFkZE4yUWFaTzdqRT0_IjUwNDYwNjEi0"
              color="main"
              textUnderline
              hover="underline-none"
              target="_blank"
              label={t("StillNotConvincedLink")}
            />
          </StyledCompareContent>
          <StyledCompareButtonWrapper>
            <Button
              id="compare-get-oo-docs-now"
              as="a"
              href="/download#docs-enterprise"
              label={t("GetOODocsNow")}
            />
            <Button
              id="compare-try-it-in-the-cloud"
              as="a"
              variant="secondary"
              href="/docspace-registration?from=comparison"
              label={t("TryItInTheCloud")}
            />
          </StyledCompareButtonWrapper>
        </StyledCompareWrapper>
      </Container>
    </Section>
  );
};

export { Compare };
