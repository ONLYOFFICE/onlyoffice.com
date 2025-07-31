import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { BestAlternativeReasons } from "@src/components/modules/best-alternative/BestAlternativeReasons";

const Reasons = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

  return (
    <BestAlternativeReasons
      heading={{
        label: (
          <Trans
            t={t}
            i18nKey="ReasonsTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        ),
      }}
      items={items.map((item) => ({
        ...item,
        heading: t(String(item.heading)),
        text: t(String(item.text)),
      }))}
    />
  );
};

export { Reasons };
