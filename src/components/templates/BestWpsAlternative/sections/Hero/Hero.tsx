import { Trans, useTranslation } from "next-i18next";
import { BestAlternativeHero } from "@src/components/modules/best-alternative/BestAlternativeHero";
import { comparisonLogos } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("best-wps-alternative");

  return (
    <BestAlternativeHero
      heading={
        <Trans
          t={t}
          i18nKey="HeroTitle"
          components={[<Text as="span" color="#FF6F3D" key="0" />]}
        />
      }
      comparisonLogos={comparisonLogos}
      buttons={[
        {
          href: "/download?from=comparison#docs-enterprise",
          label: t("GetOODocsNow"),
        },
      ]}
      text={t("CompatibleWithMicrosoftOfficeFormats")}
    />
  );
};

export { Hero };
