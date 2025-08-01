import { Trans, useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("crm");

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
        id: "crm-hero-button",
        href: "/download-workspace.aspx?from=crm",
        label: t("GetItNow"),
      }}
      image={{
        url: t("HeroImage"),
        url2x: t("HeroImage2x"),
        type: "video",
        videoUrl:
          "https://www.youtube.com/embed/A2V1EXwrogk?si=bL3bmte1R7nJgZMK",
      }}
    />
  );
};

export { Hero };
