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
  IPartnershipRequestData,
  IDownloadModalOnSubmitRequest,
} from "../PartnershipRequestForm";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { targetMarketSegments } from "@src/components/templates/PartnershipRequest/sections/PartnershipRequestForm/data/items";

const Hero = ({ locale }: IHero) => {
  const { t } = useTranslation("partnership-request");

  const initialFormData: IPartnershipRequestData = {
    firstName: "",
    lastName: "",
    positionTitle: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    numberEmployees: "",
    government: false,
    education: false,
    commerce: false, 
    fortune500: false,
    smes: false,
    industry: false,
    otherSegments: false,
    salesOpportunities: true,
    demoPortal: true,
    productTraining: true,
    salesTraining: true,
    comment: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const getTargetMarketSegments = () => {
    return targetMarketSegments
      .filter(({ key }) => formData[key])
      .map(({ name }) => name)
      .join(", ");
  };

  const getYesOrNo = (formValue: boolean) => {
    return formValue ? "Yes" : "No";
  };

  const onSubmitRequest = async ({
    from,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/partnership-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        positionTitle: formData.positionTitle,
        email: formData.email,
        phone: locale === "zh" && !formData.phone ? "+86" : formData.phone,
        companyName: formData.companyName,
        website: formData.website,
        numberEmployees: formData.numberEmployees,
        targetMarketSegments: getTargetMarketSegments(),
        salesOpportunities: getYesOrNo(formData.salesOpportunities),
        demoPortal: getYesOrNo(formData.demoPortal),
        productTraining: getYesOrNo(formData.productTraining),
        salesTraining: getYesOrNo(formData.salesTraining),
        comment: formData.comment,
        from,
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
        <StyledHeroText label={t("FillInTheDetailsBelow")} />
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
