import { Trans, useTranslation } from "next-i18next";
import { RoomsHero } from "@src/components/modules/rooms/RoomsHero";
import { Text } from "@src/components/ui/Text";
import { hero } from "./data/hero";

const Hero = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <RoomsHero
      heading={
        <Trans
          t={t}
          i18nKey={String(hero.heading)}
          components={[<Text as="span" color="#FF6F3D" key="0" />]}
        />
      }
      text={t(hero.text)}
      items={hero.items.map(({ label }) => ({
        label: t(String(label)),
      }))}
      button={{ ...hero.button, label: t(hero.button.label) }}
      image={{ url: t(hero.image.url), url2x: t(hero.image.url2x) }}
    />
  );
};

export { Hero };
