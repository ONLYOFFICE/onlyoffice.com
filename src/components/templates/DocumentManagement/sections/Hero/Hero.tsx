import { useTranslation } from "next-i18next";
import { medals } from "./data/items";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";

const Hero = () => {
  const { t } = useTranslation("document-management");

  return (
    <CollaborationsHero
      heading={t("HeroTitle")}
      text={t("HeroText")}
      button={{
        id: "document-management-hero-button",
        href: "download-workspace?from=document-management",
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
