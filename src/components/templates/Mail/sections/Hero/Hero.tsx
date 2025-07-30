import { useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";
import { medals } from "./data/items";

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
          url: t("HeroImage"),
          url2x: t("HeroImage2x"),
          type: "img",
        }}
        medals={medals}
      />
    );
};

export { Hero };
