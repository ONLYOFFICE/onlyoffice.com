import { useTranslation, Trans } from "next-i18next";
import { PricingHero } from "@src/components/modules/pricing/for-home-use/PricingHero";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

const Hero = () => {
  const { t } = useTranslation("docspace-family-pack");

  return (
    <PricingHero
      heading={
        <Trans
          t={t}
          i18nKey="BuyOODocSpaceFamilyPack"
          components={[<Text key={0} as="span" color="main" />]}
        />
      }
      label={t("DocSpaceFamilyPack")}
      price="330"
      list={[
        t("RoomBasedFileStorage"),
        t("OnlineEditors"),
        t("DesktopAndMobileApps"),
        t("EnhancedSecurityFeatures"),
        t("AllMinorUpdatesAndMajorUpgrades"),
      ]}
      tryItFreelinkUrl="/download?from=familypack#docspace-enterprise"
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
          items: [{ id: "5", label: "5" }],
          selected: "5",
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
