import { useTranslation } from "next-i18next";
import { items, tabs } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { EditorsTabs } from "@src/components/modules/editors/EditorsTabs";

const Features = () => {
  const { t } = useTranslation("seamless-collaboration");

  return (
    <>
      <EditorsTabs items={tabs} t={t} />
      <EditorsFeatures
        items={items.map((items) => ({
          ...items,
          id: items.id,
          heading: t(String(items.heading)),
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
        buttons={false}
      />
    </>
  );
};

export { Features };
