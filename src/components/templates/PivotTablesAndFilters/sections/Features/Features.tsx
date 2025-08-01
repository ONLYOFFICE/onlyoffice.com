import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";

const Features = () => {
  const { t } = useTranslation("pivot-tables-and-filters");

  return (
    <EditorsFeatures
      items={items.map((items) => ({
        ...items,
        heading: t(items.heading),
        text: t(String(items.text)),
        links: items.links?.map((link) => ({
          ...link,
          label: t(String(link.label)),
        })),
        image: {
          url: t(items.image.url),
          url2x: items.image.url2x && t(items.image.url2x),
          height: items.image.height,
        },
      }))}
      buttons={true}
    />
  );
};

export { Features };
