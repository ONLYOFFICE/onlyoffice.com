import { useTranslation } from "next-i18next";
import { items, tabs } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { EditorsTabs } from "@src/components/modules/editors/EditorsTabs";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const Features = ({ locale }: ILocale) => {
  const { t } = useTranslation("pdf-editor");

  return (
    <>
      <EditorsTabs locale={locale} items={tabs} t={t} />
      <EditorsFeatures
        items={items.map((items) => ({
          ...items,
          heading: t(String(items.heading)),
          text: t(String(items.text)),
          links: items.links?.map((link) => ({
            ...link,
            label: t(String(link.label)),
            href:
              link.href === "/app-directory"
                ? getLink("marketplace", locale)
                : link.href === "templatesLink"
                ? getLink("templates", locale)
                : link.href,
          })),
          image: {
            url: t(items.image.url),
            url2x: items.image.url2x && t(items.image.url2x),
            height: items.image.height,
          },
        }))}
        buttons={false}
      />
    </>
  );
};

export { Features };
