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
  StyledHeroLinkWrapper,
  StyledHeroLink,
  StyledHeroToggleButtonsText,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroBtnWrapper,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { Tooltip } from "@src/components/ui/Tooltip";
import { Button } from "@src/components/ui/Button";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { List } from "@src/components/widgets/pricing/List";
import { SelectorsWrapper } from "@src/components/widgets/pricing/SelectorsWrapper";
import { Reseller } from "@src/components/modules/pricing/Reseller";

const Hero = () => {
  const { t } = useTranslation("docs-enterprise-prices");

  const [formData, setFormData] = useState({
    hosting: "On-premises",
    connectionsNumber: "50",
    licenseDuration: "1-year",
    supportUpdates: "1-year",
    cloudType: "Business",
    supportLevel: "Plus",
    trainingCourses: false,
    disasterRecovery: false,
    multiTenancy: false,
  });

  const hostingIsCloud = formData.hosting === "Cloud";
  const hostingIsOnPremises = formData.hosting === "On-premises";

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
                <span>$</span>
                {hostingIsCloud ? 8 : 1500}
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
                onChange={(value) =>
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
                    onChange={(value) =>
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
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        licenseDuration: value,
                        supportUpdates:
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
                    selected={formData.supportUpdates}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        supportUpdates: value,
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
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, cloudType: value }))
                  }
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
                onChange={(value) =>
                  setFormData({ ...formData, supportLevel: value })
                }
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
              <StyledHeroTotalWrapper>
                <Heading level={4} color="#444444" label={t("Total")} />
                <StyledHeroTotalPrice>
                  <span>$</span>
                  2100
                </StyledHeroTotalPrice>
              </StyledHeroTotalWrapper>

              <StyledHeroBtnWrapper>
                <Button fullWidth label={t("GetAQuote")} />
              </StyledHeroBtnWrapper>
            </StyledHeroTotal>
          </StyledHeroItem>
        </StyledHeroWrapper>

        <Reseller />
      </Container>
    </StyledHero>
  );
};

export { Hero };
