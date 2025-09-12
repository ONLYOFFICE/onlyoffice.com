import { Trans, useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";
import { medals } from "./data/items";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const Hero = () => {
  const { t } = useTranslation("projects");

  return (
    <CollaborationsHero
      heading={t("HeroTitle")}
      text={
        <Trans
          i18nKey="HeroText"
          t={t}
          components={{
            br: <br />,
            1: <Text as="span" />,
          }}
        />
      }
      button={{
        id: "projects-hero-button",
        href: "/download-workspace?from=projects",
        label: t("GetItNow"),
      }}
      image={{
        url: getAssetUrl(t("HeroImage")),
        url2x: getAssetUrl(t("HeroImage2x")),
        type: "video",
        videoUrl:
          "https://www.youtube.com/embed/ljEU6zJj9VE?si=csSqycwScLZuTBty",
      }}
      medals={medals}
    />
  );
};

export { Hero };
