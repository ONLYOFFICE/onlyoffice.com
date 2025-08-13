import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroText,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import {
  PartnershipRequestForm,
  IDownloadModalData,
  IDownloadModalOnSubmitRequest,
} from "../PartnershipRequestForm";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";

const Hero = ({ locale }: IHero) => {
  const { t } = useTranslation("partnership-request");

  const initialFormData: IDownloadModalData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    comment: "",
    buttonId: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmitRequest = async ({
    from,
    country,
    region,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/partnership-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: locale === "zh" && !formData.phone ? "+86" : formData.phone,
        companyName: formData.companyName,
        website: formData.website,
        comment: formData.comment,
        buttonId: "partnerRequestBtn",
        from,
        country,
        region,
      }),
    }).then((res) => res.json());
  };

  return (
    <Section desktopSpacing={["56px", "112px"]}>
    <Container>
      <StyledHeroDescription>
        <StyledHeroHeading
          level={1}
          size={3}
          label={t("BecomeAnOnlyofficeOfficialPartner")}
        />
        <StyledHeroText label={t("FillInTheDetailsBelow")}></StyledHeroText>
      </StyledHeroDescription>

      <PartnershipRequestForm
        locale={locale}
        initialFormData={initialFormData}
        formData={formData}
        setFormData={setFormData}
        byClickingText={
          <Trans
            t={t}
            i18nKey="GetItNowText"
            components={[
              <Link
                key="1"
                href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0"
                target="_blank"
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
