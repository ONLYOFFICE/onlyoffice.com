import { useTranslation, Trans } from "next-i18next";
import { PricingHero } from "@src/components/modules/pricing/for-home-use/PricingHero";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

const Hero = () => {
  const { t } = useTranslation("docs-home-server");

  return (
    <PricingHero
      heading={
        <Trans
          t={t}
          i18nKey="BuyOODocsHomeServer"
          components={[<Text key={0} as="span" color="main" />]}
        />
      }
      label={t("DocsHomeServer")}
      price="149"
      list={[
        t("OnlineEditors"),
        t("MobileWebEditors"),
        t("ReadyToUseConnectors"),
        t("DesktopAndMobileApps"),
        t("EnhancedSecurityFeatures"),
        t("AllMinorUpdatesAndMajorUpgrades"),
      ]}
      tryItFreelinkUrl="/download?from=homeserver#docs-enterprise"
      buyNowLinkUrl=""
      counterSelectors={[
        {
          label: t("NumberOfUsers"),
          rightSide: (
            <Tooltip
              id="number-of-users-tooltip"
              content={t("NumberOfUsersTooltip")}
              place="bottom-start"
              infoIcon
            />
          ),
          items: [{ id: "10", label: "10" }],
          selected: "10",
        },
      ]}
      toggleButtons={[
        {
          label: t("LicenseDuration"),
          items: [
            {
              id: "lifetime",
              label: {
                name: t("Lifetime"),
                rightSide: (
                  <Tooltip
                    id="lifetime-tooltip"
                    content={t("LifetimeTooltip")}
                    place="bottom-start"
                    infoIcon
                  />
                ),
              },
            },
          ],
        },
        {
          label: t("Updates"),
          items: [{ id: "1year", label: { name: t("1Year") } }],
        },
      ]}
    />
  );
};

export { Hero };
