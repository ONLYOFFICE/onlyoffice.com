import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { items, tabs } from "./data/items";
import { getAssetUrl } from "@utils/getAssetUrl";
import { StyledEditorsTabs, StyledEditorsFeatures } from "./Features.styled"

const Features = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("seamless-collaboration");

  return (
    <>
      <StyledEditorsTabs items={tabs} t={t} className={locale} />
      <StyledEditorsFeatures
        items={items.map((items) => ({
          ...items,
          id: items.id,
          heading: t(String(items.heading)),
          text: t(String(items.text)),
          image: {
            url: getAssetUrl(t(items.image.url)),
            url2x: items.image.url2x && getAssetUrl(t(items.image.url2x)),
            height: 500,
          },
        }))}
        buttons={false}
        className="sc-f-sfc"
      />
    </>
  );
};

export { Features };
