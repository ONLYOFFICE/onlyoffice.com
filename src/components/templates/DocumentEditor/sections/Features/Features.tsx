import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";

const Features = () => {
  const { t: t1 } = useTranslation("Editors");
  const { t: t2 } = useTranslation("document-editor");

  return (
    <EditorsFeatures
      items={items.map((items) => ({
        ...items,
        heading: t2(items.heading),
        text: t2(String(items.text)),
        links: items.links?.map((link) => ({
          ...link,
          label: t1(String(link.label)) || t2(String(link.label)),
        })),
        image: {
          url: t2(items.image.url),
          url2x: items.image.url2x && (t2(items.image.url2x)),
          height: items.image.height,
        },
      }))}
      buttons={false}
    />
  );
};

export { Features };
