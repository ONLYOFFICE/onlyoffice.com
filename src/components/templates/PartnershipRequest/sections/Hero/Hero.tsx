import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroDescription,
  StyledHeroHeading,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import {
  DownloadModal,
  IDownloadModalData,
  IDownloadModalOnSubmitRequest,
} from "../DownloadModal";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const Hero = ({ locale }: IHero) => {
  const { t } = useTranslation("partnership-request");

  const initialFormData: IDownloadModalData = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    comment: "",
    buttonId: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const isDocsEnterprise = formData.type === "docsenterprisedownloadrequest";

  const onSubmitRequest = async ({
    from,
    country,
    region,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        type: formData.type,
        fullName: formData.fullName,
        email: formData.email,
        phone: locale === "zh" && !formData.phone ? "+86" : formData.phone,
        companyName: formData.companyName,
        website: formData.website,
        comment: formData.comment,
        buttonId: formData.buttonId,
        from,
        country,
        region,
      }),
    }).then((res) => res.json());
  };

  return (
    <Section>
    <Container>
      <StyledHeroDescription>
        <StyledHeroHeading
          level={2}
          size={4}
          label={t("BecomeAnOnlyofficeOfficialPartner")}
        />
      </StyledHeroDescription>

      <Button
        id="compare-get-oo-docs-now"
        label={t("GetOODocsNow")}
        onClick={() => {
          setFormData({
            ...formData,
            buttonId: "partnerRequestBtn",
            type: "docsenterprisedownloadrequest",
          });
        }}
      />

      <DownloadModal
        locale={locale}
        heading={
          <Trans
            t={t}
            i18nKey={
              isDocsEnterprise
                ? "TryOODocEnterpriseLocallyFree"
                : "TryOODocSpaceEnterpriseLocallyFree"
            }
            components={[<Text as="span" color="main" key="0" />]}
          />
        }
        initialFormData={initialFormData}
        formData={formData}
        setFormData={setFormData}
        byClickingText={
          <Trans
            t={t}
            i18nKey="GetItNowText"
            components={[
              <Link
                key="0"
                href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8516433&doc=U0U1QUs2VEtIVmtYclFTNzVXSWkxUEN6aVlWTzdOWFFsWGdibG80Mnhacz0_IntcImVudHJ5XCI6XCI4NTE2NDMzXCIsXCJsaW5rXCI6XCI5Y2ZiMWNkMS0wMmMxLTRlNmEtYThhOC1iNjFlYTk2ZTYzNDZcIn0i0"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
              <Link
                key="1"
                href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        }
        onSubmitRequest={onSubmitRequest}
      />
    </Container>
    </Section>
  );
};

export { Hero };
