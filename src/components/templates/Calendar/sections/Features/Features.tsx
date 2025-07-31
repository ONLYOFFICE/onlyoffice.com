import { Trans, useTranslation } from "next-i18next";
import { CollaborationFeatures } from "@src/components/modules/collaborations/CollaborationFeatures";
import { features } from "./data/item";
import { Text } from "@src/components/ui/Text";

const Features = () => {
  const { t } = useTranslation("calendar");

  return (
    <CollaborationFeatures
      features={features.map((item) => ({
        image: { src: t(item.image.src), alt: t(item.image.alt) },
        heading: t(item.heading),
        text: (
          <Trans
            i18nKey={item.text}
            t={t}
            components={[<Text as="b" key="0" />]}
          />
        ),
      }))}
    />
  );
};

export { Features };
