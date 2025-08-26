import { useTranslation } from "next-i18next";
import { CollaborationFeatures } from "@src/components/modules/collaborations/CollaborationFeatures";
import { features } from "./data/item";

const Features = () => {
  const { t } = useTranslation("crm");

  return (
    <CollaborationFeatures
      features={features.map((item) => ({
        image: { src: t(item.image.src), alt: t(item.image.alt) },
        heading: t(item.heading),
        text: t(item.text),
      }))}
    />
  );
};

export { Features };
