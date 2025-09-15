import { useTranslation } from "next-i18next";
import { RoomsFeatures } from "@src/components/modules/rooms/RoomsFeatures";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const Features = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <RoomsFeatures
      items={items.map((items) => ({
        ...items,
        heading: t(String(items.heading)),
        text: t(String(items.text)),
        links: items.links?.map((link) => ({
          ...link,
          label: t(String(link.label)),
        })),
        image: {
          url: getAssetUrl(t(items.image.url)),
          url2x: items.image.url2x ? getAssetUrl(t(items.image.url2x)) : undefined,
          height: items.image.height,
        },
      }))}
    />
  );
};

export { Features };
