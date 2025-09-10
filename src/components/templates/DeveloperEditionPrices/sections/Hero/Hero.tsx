import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPriceWrapper,
  StyledHeroPrice,
  StyledHeroLink,
  StyledHeroCheckboxWrapper,
  StyledHeroBtnWrapper,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroCaption,
} from "./Hero.styled";
import { IDeveloperEditionPricesFormData } from "./Hero.types";
import { IDeveloperEditionPricesTemplate } from "@src/components/templates/DeveloperEditionPrices";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { useRewardful } from "@src/utils/useRewardful";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Button } from "@src/components/ui/Button";
import { Tooltip } from "@src/components/ui/Tooltip";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { List } from "@src/components/widgets/pricing/List";
import { CounterSelectorWrapper } from "@src/components/widgets/pricing/CounterSelectorWrapper";
import { SelectorsWrapper } from "@src/components/widgets/pricing/SelectorsWrapper";
import { SelectorItemWrapper } from "@src/components/widgets/pricing/SelectorItemWrapper";
import {
  QuoteModal,
  IQuoteModalOnSubmitRequest,
  IQuoteModalFormData,
} from "@src/components/widgets/pricing/QuoteModal";

const Hero = ({ locale, productsData }: IDeveloperEditionPricesTemplate) => {
  const { t } = useTranslation("developer-edition-prices");
  const currency = getCurrencyByLocale(locale);

  const initialFormData: IDeveloperEditionPricesFormData = {
    hosting: "On-premises",
    development: true,
    devServersNumber: "1",
    production: false,
    prodServerNumber: "1",
    connectionsNumber: "250",
    nonProduction: false,
    nonProdServerNumber: "1",
    supportLevel: "Plus",
    branding: "Standard branding",
    multiTenancy: false,
    disasterRecovery: false,
    multiServerDeployment: false,
    accessToAPI: false,
    liveViewer: false,
    nativeMobileApps: false,
    desktopApps: false,
    trainingCourses: false,
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

  const hostingIsCloud = formData.hosting === "Cloud";
  const hostingIsOnPremises = formData.hosting === "On-premises";

  const isGetIsQuote = [
    formData.hosting === "Cloud",
    !formData.development,
    formData.production,
    formData.branding !== "Standard branding",
    formData.multiTenancy,
    formData.multiServerDeployment,
    formData.accessToAPI,
    formData.liveViewer,
    formData.nativeMobileApps,
    formData.desktopApps,
    formData.trainingCourses,
    formData.devServersNumber !== "1",
  ].some(Boolean);

  const isOrderNow = [
    formData.hosting === "On-premises",
    formData.development,
    formData.devServersNumber === "1",
    formData.disasterRecovery,
  ].every(Boolean);

  const product =
    {
      Basic: productsData.basicOnPremises,
      Plus: productsData.plusOnPremises,
      Premium: productsData.premiumOnPremises,
    }[formData.supportLevel] || null;

  const onSubmitRequest = async ({
    from,
    country,
    region,
    hCaptchaResponse,
  }: IQuoteModalOnSubmitRequest) => {
    return fetch("/api/developer-edition-prices", {
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
        development: formData.development,
        devServersNumber: formData.devServersNumber,
        production: formData.production,
        prodServerNumber: formData.prodServerNumber,
        connectionsNumber: formData.connectionsNumber,
        nonProduction: formData.nonProduction,
        nonProdServerNumber: formData.nonProdServerNumber,
        supportLevel: formData.supportLevel,
        branding: formData.branding,
        multiTenancy: formData.multiTenancy,
        disasterRecovery: formData.disasterRecovery,
        multiServerDeployment: formData.multiServerDeployment,
        accessToAPI: formData.accessToAPI,
        liveViewer: formData.liveViewer,
        nativeMobileApps: formData.nativeMobileApps,
        desktopApps: formData.desktopApps,
        trainingCourses: formData.trainingCourses,
        devPricesPart: "-",
        from,
        country,
        region,
        hCaptchaResponse,
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        type: "docsdeveloperrequest",
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
          <Heading level={1} label={t("OODocsDeveloper")} />
          <StyledHeroText>{t("GetAQuote")}</StyledHeroText>
        </StyledHeroHeader>

        <StyledHeroWrapper>
          <StyledHeroItem $info={true}>
            <Heading level={3} textAlign="center" label={t("DocsDeveloper")} />

            {hostingIsCloud && (
              <StyledHeroPriceWrapper>
                {t("From")}
                <StyledHeroPrice>
                  <span>{currency.symbol}</span>
                  {productsData.basicCloud.price}
                </StyledHeroPrice>
                {t("user/month")}
              </StyledHeroPriceWrapper>
            )}

            <List
              items={[
                t("OnlineEditors"),
                t("MobileWebEditors"),
                ...(hostingIsCloud
                  ? [t("ConversionService"), t("BrandingOptions")]
                  : [t("DocumentBuilder"), t("ConversionService")]),
                t("AllMinorAndMajorUpgrades"),
                t("ProfessionalAssistance"),
              ]}
            />

            {hostingIsOnPremises && (
              <StyledHeroLink
                href="/download-developer?from=developer-edition-prices#docspace-developer"
                label={t("TryItFree")}
                color="main"
                textUnderline
                hover="underline-none"
              />
            )}
          </StyledHeroItem>

          <StyledHeroItem>
            <LabeledWrapper label={t("Hosting")}>
              <ToggleButtons
                items={[
                  { id: "Cloud", label: { name: t("Cloud") } },
                  { id: "On-premises", label: { name: t("OnPremises") } },
                ]}
                selected={formData.hosting}
                onChange={(value: IDeveloperEditionPricesFormData["hosting"]) =>
                  setFormData((prev) => ({ ...prev, hosting: value }))
                }
              />
            </LabeledWrapper>

            {hostingIsOnPremises && (
              <>
                <LabeledWrapper label={t("LicensingPurpose")}>
                  <SelectorsWrapper>
                    <div>
                      <SelectorItemWrapper>
                        <Checkbox
                          checked={formData.development}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              development: !prev.development,
                            }))
                          }
                          label={t("Development")}
                          size="small"
                        />
                      </SelectorItemWrapper>

                      {formData.development && (
                        <SelectorItemWrapper>
                          <CounterSelectorWrapper
                            heading={t("NumberOfServers")}
                            subHeading={t("20ConnectionsPerEachServer")}
                          >
                            <CounterSelector
                              buttonSize="small"
                              variant="input"
                              autoFocus={formData.development}
                              value={formData.devServersNumber}
                              onChange={(value) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  devServersNumber: value,
                                }))
                              }
                            />
                          </CounterSelectorWrapper>
                        </SelectorItemWrapper>
                      )}
                    </div>

                    <div>
                      <SelectorItemWrapper>
                        <Checkbox
                          checked={formData.production}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              production: !prev.production,
                            }))
                          }
                          label={t("Production")}
                          size="small"
                        />
                      </SelectorItemWrapper>

                      {formData.production && (
                        <>
                          <SelectorItemWrapper>
                            <CounterSelectorWrapper
                              heading={t("NumberOfServers")}
                            >
                              <CounterSelector
                                buttonSize="small"
                                variant="input"
                                autoFocus={formData.production}
                                value={formData.prodServerNumber}
                                onChange={(value) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    prodServerNumber: value,
                                  }))
                                }
                              />
                            </CounterSelectorWrapper>
                          </SelectorItemWrapper>

                          <SelectorItemWrapper>
                            <CounterSelectorWrapper
                              heading={t("NumberOfConnectors")}
                              tooltip={{
                                id: "number-of-connectors",
                                content: t("NumberOfConnectorsTooltip"),
                              }}
                            >
                              <CounterSelector
                                buttonSize="small"
                                items={[
                                  { id: "250", label: "250" },
                                  { id: "500", label: "500" },
                                  { id: "1000", label: "1000" },
                                  { id: "more", label: t("More") },
                                ]}
                                selected={formData.connectionsNumber}
                                onChange={(value) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    connectionsNumber: value,
                                  }))
                                }
                              />
                            </CounterSelectorWrapper>
                          </SelectorItemWrapper>
                        </>
                      )}
                    </div>

                    {formData.production && (
                      <div>
                        <SelectorItemWrapper>
                          <StyledHeroCheckboxWrapper>
                            <Checkbox
                              checked={formData.nonProduction}
                              onChange={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  nonProduction: !prev.nonProduction,
                                }))
                              }
                              label={t("NonProduction")}
                              size="small"
                            />
                            <Tooltip
                              id="non-production"
                              content={t("NonProductionTooltip")}
                              infoIcon
                              place="bottom-start"
                            ></Tooltip>
                          </StyledHeroCheckboxWrapper>
                        </SelectorItemWrapper>

                        {formData.nonProduction && (
                          <SelectorItemWrapper>
                            <CounterSelectorWrapper
                              heading={t("NumberOfServers")}
                            >
                              <CounterSelector
                                buttonSize="small"
                                variant="input"
                                autoFocus={formData.nonProduction}
                                value={formData.nonProdServerNumber}
                                onChange={(value) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    nonProdServerNumber: value,
                                  }))
                                }
                              />
                            </CounterSelectorWrapper>
                          </SelectorItemWrapper>
                        )}
                      </div>
                    )}
                  </SelectorsWrapper>
                </LabeledWrapper>

                <LabeledWrapper label={t("Branding")}>
                  <ToggleButtons
                    items={[
                      {
                        id: "Standard branding",
                        label: { name: t("Standard") },
                      },
                      { id: "White Label", label: { name: t("WhiteLabel") } },
                    ]}
                    selected={formData.branding}
                    onChange={(
                      value: IDeveloperEditionPricesFormData["branding"],
                    ) =>
                      setFormData((prev) => ({
                        ...prev,
                        branding: value,
                      }))
                    }
                  />
                </LabeledWrapper>

                <LabeledWrapper label={t("Scalability")}>
                  <SelectorsWrapper>
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
                      checked={formData.multiServerDeployment}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          multiServerDeployment: !prev.multiServerDeployment,
                        }))
                      }
                      label={t("SupportForMultiServerDeployment")}
                      size="small"
                    />
                  </SelectorsWrapper>
                </LabeledWrapper>
              </>
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
                    content: (
                      <List
                        variant="small"
                        items={[
                          t("NumberOfRequestsIncluded10"),
                          t("FirstResponseTime24"),
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
                    content: (
                      <List
                        variant="small"
                        items={[
                          t("NumberOfRequestsIncluded20"),
                          t("FirstResponseTime12"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("IntegrationOfEditors"),
                          t("Consulting"),
                          t("BrandingAssistance"),
                          t("MonitoringSystem"),
                        ]}
                      />
                    ),
                  },
                ]}
                selected={formData.supportLevel}
                bgColor="#f5f5f5"
                collapsible
                onChange={(
                  value: IDeveloperEditionPricesFormData["supportLevel"],
                ) => setFormData({ ...formData, supportLevel: value })}
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("AdditionalToolsAndServices")}>
              <SelectorsWrapper>
                <StyledHeroCheckboxWrapper>
                  <Checkbox
                    checked={formData.accessToAPI}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        accessToAPI: !prev.accessToAPI,
                      }))
                    }
                    label={t("AccessToAutomationAPI")}
                    size="small"
                  />
                  <Tooltip
                    id="access-automation-api"
                    content={t("AccessToAutomationAPITooltip")}
                    infoIcon
                    place="bottom-start"
                  ></Tooltip>
                </StyledHeroCheckboxWrapper>

                <Checkbox
                  checked={formData.liveViewer}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      liveViewer: !prev.liveViewer,
                    }))
                  }
                  label={t("LiveViewer")}
                  size="small"
                />

                <Checkbox
                  checked={formData.nativeMobileApps}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      nativeMobileApps: !prev.nativeMobileApps,
                    }))
                  }
                  label={t("NativeMobileApps")}
                  size="small"
                />

                <Checkbox
                  checked={formData.desktopApps}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      desktopApps: !prev.desktopApps,
                    }))
                  }
                  label={t("DesktopApps")}
                  size="small"
                />

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
              </SelectorsWrapper>
            </LabeledWrapper>

            <StyledHeroTotal>
              {!(isGetIsQuote || isOrderNow) && (
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
        </StyledHeroWrapper>

        {formData.supportLevel === "Premium" && (
          <StyledHeroCaption>
            <Text as="div" size={3}>
              <Text as="span" color="main" label="*" />{" "}
              {t("TheAppropriateLicenseWithBranding")}
            </Text>

            {hostingIsOnPremises && (
              <Text as="div" size={3}>
                <Text as="span" color="main" label="**" />{" "}
                {t("TheAppropriateLicenseForCluster")}
              </Text>
            )}
          </StyledHeroCaption>
        )}

        <QuoteModal
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
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5522566&doc=RVVQOEgvM2pOK0QvNzJ0Q25xSzRlVGZRUHdvYmgxUzIwNFRUUFhxbFpNWT0_IjU1MjI1NjYi0"
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
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
