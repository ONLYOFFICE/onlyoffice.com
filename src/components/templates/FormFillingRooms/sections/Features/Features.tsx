import { useTranslation } from "next-i18next";
import { RoomFeatures } from "@src/components/modules/room/RoomFeatures";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("form-filling-rooms");

  return (
    <RoomFeatures
      items={items.map((items) => ({
        ...items,
        title: t(items.title),
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
