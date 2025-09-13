import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";
import { getAssetUrl } from "@utils/getAssetUrl";

const Features = ({ locale }: ILocale) => {
  const { t: t1 } = useTranslation("Editors");
  const { t: t2 } = useTranslation("document-editor");

  return (
    <EditorsFeatures
      items={items.map((items) => ({
        ...items,
        heading: t2(String(items.heading)),
        text: t2(String(items.text)),
        links: items.links?.map((link) => ({
          ...link,
          label: t1(String(link.label)) || t2(String(link.label)),
          href:
            link.href === "/app-directory"
              ? getLink("marketplace", locale)
              : link.href,
        })),
        image: {
          url: getAssetUrl(t2(items.image.url)),
          url2x: items.image.url2x && getAssetUrl(t2(items.image.url2x)),
          height: items.image.height,
        },
      }))}
      buttons={false}
    />
  );
};

export { Features };
