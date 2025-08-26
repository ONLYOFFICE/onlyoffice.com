import { Trans, useTranslation } from "next-i18next";
import { CollaborationsHero } from "@src/components/modules/collaborations/CollaborationsHero";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("community");

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
        id: "community-hero-button",
        href: "/download-workspace?from=community",
        label: t("GetItNow"),
      }}
      image={{
        url: t("HeroImage"),
        url2x: t("HeroImage2x"),
        type: "img",
      }}
    />
  );
};

export { Hero };
