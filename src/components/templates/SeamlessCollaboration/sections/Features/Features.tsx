import { useTranslation } from "next-i18next";
import { items, tabs } from "./data/items";
import { StyledEditorsTabs, StyledEditorsFeatures } from "./Features.styled"

const Features = () => {
  const { t } = useTranslation("seamless-collaboration");

  return (
    <>
      <StyledEditorsTabs items={tabs} t={t} />
      <StyledEditorsFeatures
        items={items.map((items) => ({
          ...items,
          id: items.id,
          heading: t(String(items.heading)),
          text: t(String(items.text)),
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
