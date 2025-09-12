import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
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
import {
  SegmentKey,
  InfoSourceKey,
  PromoteKey,
  targetMarketSegments,
  partnerInfoSource,
  partnerPromote,
} from "@src/components/templates/PartnershipRequest/sections/PartnershipRequestForm/data/items";

const Hero = ({ locale }: IHero) => {
  const { t } = useTranslation("partnership-request");
  const router = useRouter();

  const requestTypeNumber = parseInt(router.query.requestType as string) || 0;
  const _requestTypeList = ["For Hosters & MSPs", "For Software Developers"];
  const partnerReqType = _requestTypeList[requestTypeNumber];

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

    currentlyPartner: true,
    pleaseSpecify: "",
    salesOpportunities: true,
    websitePromote: false,
    socialNetworks: false,
    conferencesAndEvents: false,
    publications: false,
    personalSelling: false,
    onlineAdvertising: false,
    printAdvertising: false,
    videoAdvertising: false,
    tvAndRadioAdvertising: false,
    packaging: false,
    otherPromote: false,

    demoPortal: true,
    productTraining: true,
    salesTraining: true,
    article: false,
    conference: false,
    partner: false,
    customer: false,
    otherInfoSource: false,
    comment: "",
    spam: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  type Item<K> = {
    key: K;
    label: string;
    id: string;
    name: string;
  };

  function getSelectedNames<K extends SegmentKey | InfoSourceKey | PromoteKey>(
    items: Item<K>[],
  ): string {
    return items
      .filter(({ key }) => formData[key])
      .map(({ name }) => name)
      .join(", ");
  }

  const getYesOrNo = (formValue: boolean) => {
    return formValue ? "Yes" : "No";
  };

  const onSubmitRequest = async ({
    from,
    hCaptchaResponse,
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
        targetMarketSegments: getSelectedNames(targetMarketSegments),
        pleaseSpecify: formData.currentlyPartner
          ? formData.pleaseSpecify
          : getYesOrNo(formData.currentlyPartner),
        salesOpportunities: getYesOrNo(formData.salesOpportunities),
        promotion: getSelectedNames(partnerPromote),
        demoPortal: getYesOrNo(formData.demoPortal),
        productTraining: getYesOrNo(formData.productTraining),
        salesTraining: getYesOrNo(formData.salesTraining),
        infoSource: getSelectedNames(partnerInfoSource),
        comment: formData.comment,
        from,
        spam: formData.spam,
        partnerReqType,
        locale: router.locale === "en" ? "" : router.locale,
        hCaptchaResponse,
      }),
    }).then((res) => res.json());
  };

  return (
    <Section
      desktopSpacing={["56px", "112px"]}
      tabletSmallSpacing={["80px", "112px"]}
      mobileSpacing={["48px", "56px"]}
    >
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
              i18nKey="ByClickingSubmitRequest"
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
