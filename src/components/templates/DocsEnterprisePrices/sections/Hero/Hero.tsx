import { useEffect, useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPriceWrapper,
  StyledHeroPrice,
  StyledHeroLinkWrapper,
  StyledHeroLink,
  StyledHeroToggleButtonsText,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroBtnWrapper,
} from "./Hero.styled";
import { IDocsEnterprisePricesFormData } from "./Hero.types";
import { IDocsEnterprisePricesTemplate } from "@src/components/templates/DocsEnterprisePrices";
import { getProduct } from "./utils/getProduct";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { useRewardful } from "@src/utils/useRewardful";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Tooltip } from "@src/components/ui/Tooltip";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { List } from "@src/components/widgets/pricing/List";
import { SelectorsWrapper } from "@src/components/widgets/pricing/SelectorsWrapper";
import {
  QuoteModal,
  IQuoteModalOnSubmitRequest,
  IQuoteModalFormData,
} from "@src/components/widgets/pricing/QuoteModal";
import { Reseller } from "@src/components/modules/pricing/Reseller";

const Hero = ({ locale, productsData }: IDocsEnterprisePricesTemplate) => {
  const { t } = useTranslation("docs-enterprise-prices");
  const currency = getCurrencyByLocale(locale);

  const initialFormData: IDocsEnterprisePricesFormData = {
    hosting: "On-premises",
    connectionsNumber: "50",
    licenseDuration: "1-year",
    supportAndUpdates: "1-year",
    cloudType: "Business",
    supportLevel: "Plus",
    trainingCourses: false,
    disasterRecovery: false,
    multiTenancy: false,
  };
  const initialQuoteFormData: IQuoteModalFormData = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    hCaptcha: null,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [quoteFormData, setQuoteFormData] = useState(initialQuoteFormData);

  const [affiliate, setAffiliate] = useState<{
    id?: string;
    token?: string;
    params?: string;
  }>({
    id: "",
    token: "",
    params: "",
  });

  const { getClientReferenceId, getAffiliateToken, getClientReferenceParam } =
    useRewardful({
      onReady: () => {
        const id = getClientReferenceId();
        const token = getAffiliateToken();
        const params = getClientReferenceParam();

        setAffiliate((prev) =>
          prev.id === id && prev.token === token && prev.params === params
            ? prev
            : { id, token, params },
        );
      },
    });

  useEffect(() => {
    if (formData.hosting === "Cloud" && formData.cloudType === "Business") {
      setFormData((prev) => ({ ...prev, supportLevel: "Basic"}))
    }
  }, [formData.cloudType, formData.hosting, formData.supportLevel])
  

  const hostingIsCloud = formData.hosting === "Cloud";
  const hostingIsOnPremises = formData.hosting === "On-premises";

  const isGetIsQuote = [
    formData.hosting === "Cloud",
    formData.connectionsNumber === "more",
    formData.trainingCourses,
    formData.multiTenancy,
  ].some(Boolean);

  const isOrderNow =
    formData.disasterRecovery &&
    !formData.trainingCourses &&
    !formData.multiTenancy;

  const product = getProduct(formData, productsData);

  const onSubmitRequest = async ({
    from,
    country,
    region,
    hCaptchaResponse,
  }: IQuoteModalOnSubmitRequest) => {
    return fetch("/api/docs-enterprise-prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        fullName: quoteFormData.fullName,
        email: quoteFormData.email,
        phone: quoteFormData.phone,
        companyName: quoteFormData.companyName,
        hosting: formData.hosting,
        connectionsNumber: formData.connectionsNumber,
        licenseDuration: formData.licenseDuration,
        supportAndUpdates: formData.supportAndUpdates,
        cloudType: formData.cloudType,
        supportLevel: formData.supportLevel,
        trainingCourses: formData.trainingCourses,
        disasterRecovery: formData.disasterRecovery,
        multiTenancy: formData.multiTenancy,
        from,
        country,
        region,
        hCaptchaResponse,
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        type: "docsenterpriserequest",
      }),
    }).then((res) => res.json());
  };

  return (
    <StyledHero
      background="#f5f5f5"
      desktopSpacing={["144px", "112px"]}
      tabletSpacing={["136px", "112px"]}
      tabletSmallSpacing={["128px", "92px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroHeader>
          <Heading level={1} label={t("OODocsEnterprise")} />
          <StyledHeroText>{t("PlansAndPricing")}</StyledHeroText>
        </StyledHeroHeader>

        <StyledHeroWrapper>
          <StyledHeroItem $info={true}>
            <Heading level={3} textAlign="center" label={t("DocsEnterprise")} />

            <StyledHeroPriceWrapper>
              {t("From")}
              <StyledHeroPrice>
                <span>{currency.symbol}</span>
                {hostingIsCloud ? 8 : productsData.basic1.price}
              </StyledHeroPrice>
              {hostingIsCloud && t("user/month")}
            </StyledHeroPriceWrapper>

            <List
              items={[
                t("OnlineEditors"),
                t("MobileWebEditors"),
                t("ReadyToUseConnectors"),
                t("DesktopAndMobileApps"),
                t("EnhancedSecurityFeatures"),
                t("AllMinorUpdatesAndMajorUpgrades"),
                t("ProfessionalAssistance"),
              ]}
            />

            <StyledHeroLinkWrapper>
              <StyledHeroLink
                href={
                  hostingIsCloud
                    ? "/docs-registration"
                    : "/download?from=docs-enterprise-prices#docs-enterprise"
                }
                label={hostingIsCloud ? t("GetStarted") : t("TryItFree")}
                color="main"
                textUnderline
                hover="underline-none"
              />
            </StyledHeroLinkWrapper>
          </StyledHeroItem>

          <StyledHeroItem>
            <LabeledWrapper label={t("Hosting")}>
              <ToggleButtons
                items={[
                  { id: "Cloud", label: { name: t("Cloud") } },
                  { id: "On-premises", label: { name: t("OnPremises") } },
                ]}
                selected={formData.hosting}
                onChange={(value: IDocsEnterprisePricesFormData["hosting"]) =>
                  setFormData((prev) => ({ ...prev, hosting: value }))
                }
              />
            </LabeledWrapper>

            {hostingIsOnPremises && (
              <>
                <LabeledWrapper
                  label={t("NumberOfConnections")}
                  rightSide={
                    <Tooltip
                      id="number-of-connections"
                      place="bottom-start"
                      content={t("NumberOfConnectionsTooltip")}
                      infoIcon
                    />
                  }
                >
                  <CounterSelector
                    items={[
                      { id: "50", label: "50" },
                      { id: "100", label: "100" },
                      { id: "200", label: "200" },
                      { id: "more", label: t("More") },
                    ]}
                    selected={formData.connectionsNumber}
                    bgColor="#f5f5f5"
                    onChange={(
                      value: IDocsEnterprisePricesFormData["connectionsNumber"],
                    ) =>
                      setFormData((prev) => ({
                        ...prev,
                        connectionsNumber: value,
                      }))
                    }
                  />
                </LabeledWrapper>

                <LabeledWrapper label={t("LicenseDuration")}>
                  <ToggleButtons
                    items={[
                      { id: "1-year", label: { name: t("1 year") } },
                      { id: "Lifetime", label: { name: t("Lifetime") } },
                    ]}
                    selected={formData.licenseDuration}
                    onChange={(
                      value: IDocsEnterprisePricesFormData["licenseDuration"],
                    ) =>
                      setFormData((prev) => ({
                        ...prev,
                        licenseDuration: value,
                        supportAndUpdates:
                          value === "1-year" ? "1-year" : "3-year",
                      }))
                    }
                  />
                </LabeledWrapper>

                <LabeledWrapper label={t("Support&Updates")}>
                  <ToggleButtons
                    items={[
                      { id: "1-year", label: { name: t("1 year") } },
                      { id: "3-year", label: { name: t("3 year") } },
                    ]}
                    selected={formData.supportAndUpdates}
                    onChange={(
                      value: IDocsEnterprisePricesFormData["supportAndUpdates"],
                    ) =>
                      setFormData((prev) => ({
                        ...prev,
                        supportAndUpdates: value,
                        licenseDuration:
                          value === "1-year" ? "1-year" : "Lifetime",
                      }))
                    }
                  />
                </LabeledWrapper>
              </>
            )}

            {hostingIsCloud && (
              <LabeledWrapper label={t("CloudType")}>
                <ToggleButtons
                  items={[
                    {
                      id: "Business",
                      label: {
                        name: (
                          <div>
                            <div>{t("Business")}</div>
                            <StyledHeroToggleButtonsText>
                              {t("PostpaidBilling")}
                            </StyledHeroToggleButtonsText>
                          </div>
                        ),
                      },
                    },
                    {
                      id: "VIP",
                      label: {
                        name: (
                          <div>
                            <div>{t("VIP")}</div>
                            <StyledHeroToggleButtonsText>
                              {t("PrepaidBilling")}
                            </StyledHeroToggleButtonsText>
                          </div>
                        ),
                      },
                    },
                  ]}
                  selected={formData.cloudType}
                  onChange={(
                    value: IDocsEnterprisePricesFormData["cloudType"],
                  ) => setFormData((prev) => ({ ...prev, cloudType: value }))}
                />
              </LabeledWrapper>
            )}

            <LabeledWrapper label={t("SupportLevel")}>
              <Tabs
                items={[
                  {
                    id: "Basic",
                    label: t("Basic"),
                    content: (
                      <List
                        variant="small"
                        items={[
                          t("NumberOfRequestsIncluded5"),
                          t("FirstResponseTime48"),
                          t("StandardInstallation"),
                          t("PrimaryConfiguration"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("IntegrationOfEditors"),
                          t("Consulting"),
                        ]}
                      />
                    ),
                  },
                  {
                    id: "Plus",
                    label: t("Plus"),
                    disabled: hostingIsCloud && formData.cloudType === "Business",
                    content: (
                      <List
                        variant="small"
                        items={[
                          t("NumberOfRequestsIncluded10"),
                          t("FirstResponseTime24"),
                          t("StandardInstallation"),
                          t("PrimaryConfiguration"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("IntegrationOfEditors"),
                          t("Consulting"),
                        ]}
                      />
                    ),
                  },
                  {
                    id: "Premium",
                    label: t("Premium"),
                    disabled: hostingIsCloud && formData.cloudType === "Business",
                    content: (
                      <List
                        variant="small"
                        items={[
                          t("NumberOfRequestsIncluded20"),
                          t("FirstResponseTime12"),
                          t("StandardInstallation"),
                          t("PrimaryConfiguration"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("IntegrationOfEditors"),
                          t("Consulting"),
                          t("MonitoringSystem"),
                          t("ClusteringAssistance*"),
                          t("RemoteSessions"),
                          t("AccountEngineer"),
                          t("PhoneSupport"),
                        ]}
                      />
                    ),
                  },
                ]}
                selected={formData.supportLevel}
                bgColor="#f5f5f5"
                collapsible
                onChange={(
                  value: IDocsEnterprisePricesFormData["supportLevel"],
                ) => setFormData({ ...formData, supportLevel: value })}
              />
            </LabeledWrapper>

            {hostingIsOnPremises && (
              <LabeledWrapper label={t("Scalability")}>
                <SelectorsWrapper>
                  <Checkbox
                    checked={formData.disasterRecovery}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        disasterRecovery: !prev.disasterRecovery,
                      }))
                    }
                    label={t("SupportForDisasterRecovery")}
                    size="small"
                  />

                  <Checkbox
                    checked={formData.multiTenancy}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        multiTenancy: !prev.multiTenancy,
                      }))
                    }
                    label={t("SupportForMultiTenancy")}
                    size="small"
                  />
                </SelectorsWrapper>
              </LabeledWrapper>
            )}

            <LabeledWrapper label={t("AdditionalToolsAndServices")}>
              <Checkbox
                checked={formData.trainingCourses}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    trainingCourses: !prev.trainingCourses,
                  }))
                }
                label={t("TrainingCourses")}
                size="small"
              />
            </LabeledWrapper>

            <StyledHeroTotal>
              {!isGetIsQuote && (
                <StyledHeroTotalWrapper>
                  <Heading level={4} color="#444444" label={t("Total")} />
                  <StyledHeroTotalPrice>
                    <span>{currency.symbol}</span>
                    {product?.price}
                  </StyledHeroTotalPrice>
                </StyledHeroTotalWrapper>
              )}

              <StyledHeroBtnWrapper>
                {isGetIsQuote ? (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    data-testid="get-a-quote-button"
                    fullWidth
                    label={t("GetAQuote")}
                  />
                ) : isOrderNow ? (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    data-testid="get-a-quote-button"
                    fullWidth
                    label={t("OrderNow")}
                  />
                ) : (
                  <Button
                    data-testid="buy-now-button"
                    as="a"
                    fullWidth
                    href={product?.url}
                    target="_blank"
                    label={t("BuyNow")}
                  />
                )}
              </StyledHeroBtnWrapper>
            </StyledHeroTotal>
          </StyledHeroItem>

          <QuoteModal
            locale={locale}
            isOpen={isModalOpen}
            heading={
              isOrderNow
                ? t("FillInTheFormToReceive")
                : t("FillInTheFormToGetAQuote")
            }
            byClickedText={
              <Trans
                t={t}
                i18nKey="GetItNowText"
                components={[
                  <Link
                    key="0"
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=4995927&doc=bTNVWUNPTm1yMzBlRW9Eb3o1MityMWJRNGlzcTFCZFlxdFRLbEFLdmVOcz0_IjQ5OTU5Mjci0"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                  <Link
                    key="1"
                    href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            }
            initialFormData={initialFormData}
            initialQuoteFormData={initialQuoteFormData}
            setFormData={setFormData}
            quoteFormData={quoteFormData}
            setQuoteFormData={setQuoteFormData}
            buttonLabel={isOrderNow ? t("OrderNow") : t("GetAQuote")}
            onSubmitRequest={onSubmitRequest}
            onClose={() => setIsModalOpen(false)}
            pageTrackName={isOrderNow ? "ie-order-now" : "ie-gaq" }
          />
        </StyledHeroWrapper>

        <Reseller />
      </Container>
    </StyledHero>
  );
};

export { Hero };
