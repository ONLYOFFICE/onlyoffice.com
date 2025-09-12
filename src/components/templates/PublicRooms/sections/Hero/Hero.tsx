import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Text } from "@src/components/ui/Text";
import { RoomsHeroVideo } from "@src/components/modules/rooms/RoomsHeroVideo";
import { RoomsHero } from "@src/components/modules/rooms/RoomsHero";
import { hero } from "./data/hero";



import { getAssetUrl } from "@utils/getAssetUrl";
const Hero = () => {
  const { t } = useTranslation("public-rooms");
  const router = useRouter();
  const { locale } = router;


  const heroProps= {
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
  
    const videoImage = hero.imageVideo
      ? { url: getAssetUrl(t(hero.imageVideo.url)), url2x: getAssetUrl(t(hero.imageVideo.url2x)) }
      : { url: getAssetUrl(t(hero.image.url)), url2x: getAssetUrl(t(hero.image.url2x)) };

    return (
      <RoomsHeroVideo
        {...heroProps}
        videoUrl={hero.videoUrl}
        image={videoImage}
      />
    );
};

export { Hero };
