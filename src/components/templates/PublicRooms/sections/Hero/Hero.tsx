import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { RoomHero } from "@src/components/modules/room/RoomHero";
import { hero } from "./data/hero";

const Hero = () => {
  const { t } = useTranslation("public-rooms");

  return (
    <RoomHero
      title={
        <Trans
          t={t}
          i18nKey={String(hero.title)}
          components={[<Text as="span" color="#FF6F3D" key="0" />]}
        />
      }
      text={t(hero.text)}
      items={hero.items.map(({ label }) => ({
        label: t(String(label)),
      }))}
      button={{ ...hero.button, label: t(hero.button.label) }}
      imgUrl={t(hero.imgUrl)}
      imgUrl2x={t(hero.imgUrl2x)}
    />
  );
};

export { Hero };
