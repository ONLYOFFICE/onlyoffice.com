import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const Features = ({ locale }: ILocale) => {
  const { t: t1 } = useTranslation("Editors");
  const { t: t2 } = useTranslation("slides");

  return (
    <EditorsFeatures
      items={items.map((item, index) => ({
        ...item,
        heading: t2(String(item.heading)),
        text: t2(String(item.text)),
        links:
          item.links && (index !== 2 || locale === "en")
            ? item.links.map((link) => ({
                ...link,
                label: t1(String(link.label)) || t2(String(link.label)),
                href:
                  link.href === "/app-directory"
                    ? getLink("marketplace", locale)
                    : link.href,
              }))
            : undefined,
        image: {
          url: t2(item.image.url),
          url2x: item.image.url2x && t2(item.image.url2x),
          height: item.image.height,
        },
      }))}
      buttons={false}
    />
  );
};

export { Features };
