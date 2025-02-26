import { useTranslation } from "next-i18next";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-box");

  return (
    <FeatureTabs
      bgColor="#f9f9f9"
      heading={t("EditAndCoAuthorOfficeDocuments")}
      headingSize={3}
      items={items.map(({ label, images }) => ({
        label: t(label),
        images: {
          url: t(images.url),
          url2x: t(images.url2x),
        },
      }))}
    />
  );
};

export { Documents };
