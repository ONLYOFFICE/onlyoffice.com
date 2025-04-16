import { useTranslation } from "next-i18next";
import { RoomsFeatures } from "@src/components/modules/rooms/RoomsFeatures";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <RoomsFeatures
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
    />
  );
};

export { Features };
