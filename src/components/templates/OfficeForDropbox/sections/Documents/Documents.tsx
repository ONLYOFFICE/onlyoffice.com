import { useTranslation } from "next-i18next";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { items } from "./data/items";

const Documents = () => {
  const { t } = useTranslation("office-for-dropbox");

  return (
    <FeatureTabs
      heading={t("WorkOnOfficeDocumentsStored")}
      headingSize={3}
      tabletSmallSpacing={["80px", "80px"]}
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
