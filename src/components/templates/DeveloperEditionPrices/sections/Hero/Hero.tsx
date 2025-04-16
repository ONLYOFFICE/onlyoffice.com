import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPriceWrapper,
  StyledHeroPrice,
  StyledHeroList,
  StyledHeroLink,
  StyledHeroTabsList,
  StyledHeroCheckboxes,
  StyledHeroCheckboxWrapper,
  StyledHeroBox,
  StyledHeroBoxItem,
  StyledHeroBtnWrapper,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroCaption,
} from "./Hero.styled";
import { ILocale } from "@src/types/locale";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Button } from "@src/components/ui/Button";
import { Tooltip } from "@src/components/ui/Tooltip";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { CounterSelectorWrapper } from "./sub-components/CounterSelectorWrapper";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { Text } from "@src/components/ui/Text";
import { HeroModal } from "./sub-components/HeroModal";

const Hero = ({ locale }: ILocale) => {
  const { t } = useTranslation("developer-edition-prices");

  const [hosting, setHosting] = useState("on-premises");
  const [supportLevel, setSupportLevel] = useState("plus");
  const [accessAutomationApi, setAccessAutomationApi] = useState(false);
  const [liveViewer, setLiveViewer] = useState(false);
  const [nativeMobileApps, setNativeMobileApps] = useState(false);
  const [desktopApps, setDesktopApps] = useState(false);
  const [trainingCourses, setTrainingCourses] = useState(false);
  const [development, setDevelopment] = useState(true);
  const [developmentServers, setDevelopmentServers] = useState("1");
  const [production, setProduction] = useState(false);
  const [productionServers, setProductionServers] = useState("1");
  const [productionConnectors, setProductionConnectors] = useState("250");
  const [branding, setBranding] = useState("standard");
  const [multiTenancy, setMultiTenancy] = useState(false);
  const [disasterRecovery, setDisasterRecovery] = useState(false);
  const [multiServerDeployment, setMultiServerDeployment] = useState(false);
  const [nonProduction, setNonProduction] = useState(false);
  const [nonProductionServers, setNonProductionServers] = useState("1");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const hostingIsCloud = hosting === "cloud";
  const hostingIsOnPremises = hosting === "on-premises";

  const isGetIsQuote = [
    hosting === "cloud",
    !development,
    production,
    branding !== "standard",
    multiTenancy,
    multiServerDeployment,
    accessAutomationApi,
    liveViewer,
    nativeMobileApps,
    desktopApps,
    trainingCourses,
    developmentServers !== "1",
  ].some(Boolean);

  const isOrderNow = [
    hosting === "on-premises",
    development,
    developmentServers === "1",
    disasterRecovery,
  ].every(Boolean);

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

            <StyledHeroPriceWrapper>
              {t("From")}
              <StyledHeroPrice>
                <span>$</span>
                {hostingIsCloud ? "12" : "1950"}
              </StyledHeroPrice>
              {hostingIsCloud ? t("user/month") : t("PerYear")}
            </StyledHeroPriceWrapper>

            <StyledHeroList>
              <li>{t("OnlineEditors")}</li>
              <li>{t("MobileWebEditors")}</li>
              {hostingIsCloud ? (
                <>
                  <li>{t("ConversionService")}</li>
                  <li>{t("BrandingOptions")}</li>
                </>
              ) : (
                <>
                  <li>{t("DocumentBuilder")}</li>
                  <li>{t("ConversionService")}</li>
                </>
              )}
              <li>{t("AllMinorAndMajorUpgrades")}</li>
              <li>{t("ProfessionalAssistance")}</li>
            </StyledHeroList>

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
                  { id: "cloud", label: { name: t("Cloud") } },
                  { id: "on-premises", label: { name: t("OnPremises") } },
                ]}
                selected={hosting}
                onChange={(value) => setHosting(value)}
              />
            </LabeledWrapper>

            {hostingIsOnPremises && (
              <>
                <LabeledWrapper label={t("LicensingPurpose")}>
                  <StyledHeroBox>
                    <div>
                      <StyledHeroBoxItem>
                        <Checkbox
                          checked={development}
                          onChange={() => setDevelopment(!development)}
                          label={t("Development")}
                          size="small"
                        />
                      </StyledHeroBoxItem>

                      {development && (
                        <StyledHeroBoxItem>
                          <CounterSelectorWrapper
                            heading={t("NumberOfServers")}
                            subHeading={t("20ConnectionsPerEachServer")}
                          >
                            <CounterSelector
                              size="small"
                              variant="input"
                              autoFocus={development}
                              value={developmentServers}
                              onChange={(value) => setDevelopmentServers(value)}
                            />
                          </CounterSelectorWrapper>
                        </StyledHeroBoxItem>
                      )}
                    </div>

                    <div>
                      <StyledHeroBoxItem>
                        <Checkbox
                          checked={production}
                          onChange={() => setProduction(!production)}
                          label={t("Production")}
                          size="small"
                        />
                      </StyledHeroBoxItem>

                      {production && (
                        <>
                          <StyledHeroBoxItem>
                            <CounterSelectorWrapper
                              heading={t("NumberOfServers")}
                            >
                              <CounterSelector
                                size="small"
                                variant="input"
                                autoFocus={production}
                                value={productionServers}
                                onChange={(value) =>
                                  setProductionServers(value)
                                }
                              />
                            </CounterSelectorWrapper>
                          </StyledHeroBoxItem>

                          <StyledHeroBoxItem>
                            <CounterSelectorWrapper
                              heading={t("NumberOfConnectors")}
                            >
                              <CounterSelector
                                size="small"
                                items={[
                                  { id: "250", label: "250" },
                                  { id: "500", label: "500" },
                                  { id: "1000", label: "1000" },
                                  { id: "more", label: t("More") },
                                ]}
                                selected={productionConnectors}
                                onChange={(newValue) =>
                                  setProductionConnectors(newValue)
                                }
                              />
                            </CounterSelectorWrapper>
                          </StyledHeroBoxItem>
                        </>
                      )}
                    </div>

                    {production && (
                      <div>
                        <StyledHeroBoxItem>
                          <Checkbox
                            checked={nonProduction}
                            onChange={() => setNonProduction(!nonProduction)}
                            label={t("NonProduction")}
                            size="small"
                          />
                        </StyledHeroBoxItem>

                        {nonProduction && (
                          <StyledHeroBoxItem>
                            <CounterSelectorWrapper
                              heading={t("NumberOfServers")}
                            >
                              <CounterSelector
                                size="small"
                                variant="input"
                                autoFocus={nonProduction}
                                value={nonProductionServers}
                                onChange={(value) =>
                                  setNonProductionServers(value)
                                }
                              />
                            </CounterSelectorWrapper>
                          </StyledHeroBoxItem>
                        )}
                      </div>
                    )}
                  </StyledHeroBox>
                </LabeledWrapper>

                <LabeledWrapper label={t("Branding")}>
                  <ToggleButtons
                    items={[
                      { id: "standard", label: { name: t("Standard") } },
                      { id: "white-label", label: { name: t("WhiteLabel") } },
                    ]}
                    selected={branding}
                    onChange={(value) => setBranding(value)}
                  />
                </LabeledWrapper>

                <LabeledWrapper label={t("Scalability")}>
                  <StyledHeroCheckboxes>
                    <Checkbox
                      checked={multiTenancy}
                      onChange={() => setMultiTenancy(!multiTenancy)}
                      label={t("SupportForMultiTenancy")}
                      size="small"
                    />

                    <Checkbox
                      checked={disasterRecovery}
                      onChange={() => setDisasterRecovery(!disasterRecovery)}
                      label={t("SupportForDisasterRecovery")}
                      size="small"
                    />

                    <Checkbox
                      checked={multiServerDeployment}
                      onChange={() =>
                        setMultiServerDeployment(!multiServerDeployment)
                      }
                      label={t("SupportForMultiServerDeployment")}
                      size="small"
                    />
                  </StyledHeroCheckboxes>
                </LabeledWrapper>
              </>
            )}

            <LabeledWrapper label={t("SupportLevel")}>
              <Tabs
                items={[
                  {
                    id: "basic",
                    label: t("Basic"),
                    content: (
                      <StyledHeroTabsList>
                        <li>{t("NumberOfRequestsIncluded5")}</li>
                        <li>{t("FirstResponseTime48")}</li>
                        <li>{t("Migration")}</li>
                        <li>{t("UpdatesInstallation")}</li>
                        <li>{t("IntegrationOfEditors")}</li>
                        <li>{t("Consulting")}</li>
                      </StyledHeroTabsList>
                    ),
                  },
                  {
                    id: "plus",
                    label: t("Plus"),
                    content: (
                      <StyledHeroTabsList>
                        <li>{t("NumberOfRequestsIncluded10")}</li>
                        <li>{t("FirstResponseTime24")}</li>
                        <li>{t("Migration")}</li>
                        <li>{t("UpdatesInstallation")}</li>
                        <li>{t("IntegrationOfEditors")}</li>
                        <li>{t("Consulting")}</li>
                      </StyledHeroTabsList>
                    ),
                  },
                  {
                    id: "premium",
                    label: t("Premium"),
                    content: (
                      <StyledHeroTabsList>
                        <li>{t("NumberOfRequestsIncluded20")}</li>
                        <li>{t("FirstResponseTime12")}</li>
                        <li>{t("Migration")}</li>
                        <li>{t("UpdatesInstallation")}</li>
                        <li>{t("IntegrationOfEditors")}</li>
                        <li>{t("Consulting")}</li>
                        <li>{t("BrandingAssistance")}</li>
                        <li>{t("MonitoringSystem")}</li>
                      </StyledHeroTabsList>
                    ),
                  },
                ]}
                selected={supportLevel}
                bgColor="#f5f5f5"
                collapsible
                onChange={(value) => setSupportLevel(value)}
              />
            </LabeledWrapper>

            <LabeledWrapper label={t("AdditionalToolsAndServices")}>
              <StyledHeroCheckboxes>
                <StyledHeroCheckboxWrapper>
                  <Checkbox
                    checked={accessAutomationApi}
                    onChange={() =>
                      setAccessAutomationApi(!accessAutomationApi)
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
                  checked={liveViewer}
                  onChange={() => setLiveViewer(!liveViewer)}
                  label={t("LiveViewer")}
                  size="small"
                />

                <Checkbox
                  checked={nativeMobileApps}
                  onChange={() => setNativeMobileApps(!nativeMobileApps)}
                  label={t("NativeMobileApps")}
                  size="small"
                />

                <Checkbox
                  checked={desktopApps}
                  onChange={() => setDesktopApps(!desktopApps)}
                  label={t("DesktopApps")}
                  size="small"
                />

                <Checkbox
                  checked={trainingCourses}
                  onChange={() => setTrainingCourses(!trainingCourses)}
                  label={t("TrainingCourses")}
                  size="small"
                />
              </StyledHeroCheckboxes>
            </LabeledWrapper>

            <StyledHeroTotal>
              {!(isGetIsQuote || isOrderNow) && (
                <StyledHeroTotalWrapper>
                  <Heading level={4} color="#444444" label={t("Total")} />
                  <StyledHeroTotalPrice>
                    <span>$</span>
                    {supportLevel === "basic"
                      ? "1950"
                      : supportLevel === "plus"
                      ? "3500"
                      : "4500"}
                  </StyledHeroTotalPrice>
                </StyledHeroTotalWrapper>
              )}

              <StyledHeroBtnWrapper>
                {isGetIsQuote ? (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    fullWidth
                    label={t("GetAQuote")}
                  />
                ) : isOrderNow ? (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    fullWidth
                    label={t("OrderNow")}
                  />
                ) : (
                  <Button as="a" fullWidth href="" label={t("BuyNow")} />
                )}
              </StyledHeroBtnWrapper>
            </StyledHeroTotal>
          </StyledHeroItem>
        </StyledHeroWrapper>

        {supportLevel === "premium" && (
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

        <HeroModal
          locale={locale}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isOrderNow={isOrderNow}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
