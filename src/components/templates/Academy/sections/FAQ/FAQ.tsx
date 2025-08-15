import { useTranslation } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { items } from "./data/items";

const FAQ = () => {
  const { t } = useTranslation("academy");

  return (
    <FaqCollapse
      items={items.map(({ label, children }) => ({
        label: t(label),
        content: t(String(children)),
      }))}
    />
  );
};

export { FAQ };
