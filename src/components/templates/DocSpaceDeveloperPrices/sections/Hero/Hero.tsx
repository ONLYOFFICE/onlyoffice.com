import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPrice,
  StyledHeroLink,
  StyledHeroCaption,
} from "./Hero.styled";
import { IDocSpaceDeveloperPricesFormData } from "./Hero.types";
import { ILocale } from "@src/types/locale";
import { useRewardful } from "@src/utils/useRewardful";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { CounterSelectorWrapper } from "@src/components/widgets/pricing/CounterSelectorWrapper";
import { List } from "@src/components/widgets/pricing/List";
import {
  QuoteModal,
  IQuoteModalOnSubmitRequest,
  IQuoteModalFormData,
} from "@src/components/widgets/pricing/QuoteModal";
import { SelectorsWrapper } from "@src/components/widgets/pricing/SelectorsWrapper";
import { SelectorItemWrapper } from "@src/components/widgets/pricing/SelectorItemWrapper";

const Hero = ({ locale }: ILocale) => {
  const { t } = useTranslation("docspace-developer-prices");

  const initialFormData: IDocSpaceDeveloperPricesFormData = {
    development: true,
    devServersNumber: "1",
    production: false,
    prodServerNumber: "1",
    connectionsNumber: "250",
    supportLevel: "Plus",
    branding: "Standard branding",
    multiTenancy: false,
    disasterRecovery: false,
    multiServerDeployment: false,
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

  const onSubmitRequest = async ({
    from,
    country,
    region,
  }: IQuoteModalOnSubmitRequest) => {
    return fetch("/api/docspace-developer-prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        fullName: quoteFormData.fullName,
        email: quoteFormData.email,
        phone:
          locale === "zh" && !quoteFormData.phone ? "+86" : quoteFormData.phone,
        companyName: quoteFormData.companyName,
        development: formData.development,
        devServersNumber: formData.devServersNumber,
        production: formData.production,
        prodServerNumber: formData.prodServerNumber,
        connectionsNumber: formData.connectionsNumber,
        supportLevel: formData.supportLevel,
        branding: formData.branding,
        multiTenancy: formData.multiTenancy,
        disasterRecovery: formData.disasterRecovery,
        multiServerDeployment: formData.multiServerDeployment,
        nativeMobileApps: formData.nativeMobileApps,
        desktopApps: formData.desktopApps,
        trainingCourses: formData.trainingCourses,
        from,
        country,
        region,
        affiliateId: affiliate.id || "",
        affiliateToken: affiliate.token || "",
        type: "docspacedeveloperrequest",
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
          <Heading level={1} label={t("OODocSpaceDeveloper")} />
          <StyledHeroText>{t("GetAQuote")}</StyledHeroText>
        </StyledHeroHeader>

        <StyledHeroWrapper>
          <StyledHeroItem $info={true}>
            <Heading
              level={3}
              textAlign="center"
              label={t("DocSpaceDeveloper")}
            />

            <StyledHeroPrice>{t("1YearLicense")}</StyledHeroPrice>

            <List
              items={[
                t("RoomBasedDocumentManagementSystem"),
                t("OnlineEditors"),
                t("MobileWebEditors"),
                t("EnhancedSecurityFeatures"),
                t("AllMinorAndMajorUpgrades"),
                t("ProfessionalAssistance"),
              ]}
            />

            <StyledHeroLink
              href="/download-developer#docspace-developer"
              label={t("TryItFree")}
              color="main"
              textUnderline
              hover="underline-none"
            />
          </StyledHeroItem>

          <StyledHeroItem>
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
                        <CounterSelectorWrapper heading={t("NumberOfServers")}>
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
                            id: "connectionsNumber",
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
              </SelectorsWrapper>
            </LabeledWrapper>

            <LabeledWrapper label={t("Branding")}>
              <ToggleButtons
                items={[
                  { id: "Standard branding", label: { name: t("Standard") } },
                  { id: "White Label", label: { name: t("WhiteLabel") } },
                ]}
                selected={formData.branding}
                onChange={(
                  value: IDocSpaceDeveloperPricesFormData["branding"],
                ) => setFormData((prev) => ({ ...prev, branding: value }))}
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
                          t("Integration"),
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
                          t("StandardInstallation"),
                          t("PrimaryConfiguration"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("Integration"),
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
                          t("StandardInstallation"),
                          t("PrimaryConfiguration"),
                          t("Migration"),
                          t("UpdatesInstallation"),
                          t("Integration"),
                          t("Consulting"),
                          t("BrandingAssistance*"),
                          t("MonitoringSystem"),
                          t("ClusteringAssistance**"),
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
                  value: IDocSpaceDeveloperPricesFormData["supportLevel"],
                ) => setFormData((prev) => ({ ...prev, supportLevel: value }))}
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("AdditionalToolsAndServices")}>
              <SelectorsWrapper>
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

            <Button
              onClick={() => setIsModalOpen(true)}
              data-testid="get-a-quote-button"
              fullWidth
              label={t("GetAQuote")}
            />
          </StyledHeroItem>
        </StyledHeroWrapper>

        {formData.supportLevel === "Premium" && (
          <StyledHeroCaption>
            <Text as="div" size={3}>
              <Text as="span" color="main" label="*" />{" "}
              {t("TheAppropriateLicenseWithBranding")}
            </Text>
            <Text as="div" size={3}>
              <Text as="span" color="main" label="**" />{" "}
              {t("TheAppropriateLicenseForCluster")}
            </Text>
          </StyledHeroCaption>
        )}

        <QuoteModal
          isOpen={isModalOpen}
          heading={t("FillInTheFormToGetAQuote")}
          byClickedText={
            <Trans
              t={t}
              i18nKey="ByClickingGetAQuote"
              components={[
                <Link
                  key="0"
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0"
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
          buttonLabel={t("GetAQuote")}
          onSubmitRequest={onSubmitRequest}
          onClose={() => setIsModalOpen(false)}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
