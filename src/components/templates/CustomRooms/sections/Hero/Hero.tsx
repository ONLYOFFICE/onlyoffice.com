import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { RoomsHeroVideo } from "@src/components/modules/rooms/RoomsHeroVideo";
import { RoomsHero } from "@src/components/modules/rooms/RoomsHero";
import { hero } from "./data/hero";

import { getAssetUrl } from "@utils/getAssetUrl";
interface HeroProps {
  locale?: string;
}

const Hero = ({ locale }: HeroProps) => {
  const { t } = useTranslation("custom-rooms");

  const heroProps = {
    heading: (
      <Trans
        t={t}
        i18nKey={String(hero.heading)}
        components={[<Text as="span" color="#FF6F3D" key="0" />]}
      />
    ),
    text: t(hero.text),
    items: hero.items.map(({ label }) => ({
      label: t(String(label)),
    })),
    button: { ...hero.button, label: t(hero.button.label) },
    image: { url: getAssetUrl(t(hero.image.url)), url2x: getAssetUrl(t(hero.image.url2x)) },
  };

  if (locale === "zh") {
    return <RoomsHero {...heroProps} />;
  }

  return <RoomsHeroVideo {...heroProps} videoUrl={hero.videoUrl} />;
};

export { Hero };
