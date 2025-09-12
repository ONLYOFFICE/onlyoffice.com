import { useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";

import { getAssetUrl } from "@utils/getAssetUrl";
const Hero = () => {
  const { t } = useTranslation("calendar");

  return (
    <CollaborationsHero
      heading={t("HeroTitle")}
      text={t("HeroText")}
      button={{
        id: "calendar-hero-button",
        href: "/download-workspace.aspx?from=calendar",
        label: t("GetItNow"),
      }}
      image={{
        url: getAssetUrl(t("HeroImage")),
        url2x: getAssetUrl(t("HeroImage2x")),
        type: "video",
        videoUrl:
          "https://www.youtube.com/embed/uVWhdUV6-cM?si=m0ns3fFX6KhHmrBu",
      }}
    />
  );
};

export { Hero };
