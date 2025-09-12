import { useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";
import { medals } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const Hero = () => {
    const { t } = useTranslation("mail");

    return (
      <CollaborationsHero
        heading={t("HeroTitle")}
        text={t("HeroText")}
        button={{
          id: "mail-hero-button",
          href: "/download-workspace?from=mail",
          label: t("GetItNow"),
        }}
        image={{
          url: getAssetUrl(t("HeroImage")),
          url2x: getAssetUrl(t("HeroImage2x")),
          type: "img",
        }}
        medals={medals}
      />
    );
};

export { Hero };
