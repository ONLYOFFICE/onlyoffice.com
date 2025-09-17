import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { BestAlternativeReasons } from "@src/components/modules/best-alternative/BestAlternativeReasons";
import { Link } from "@src/components/ui/Link";

const Reasons = () => {
  const { t } = useTranslation("best-wps-alternative");

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
        text: (
          <Trans
            t={t}
            i18nKey={String(item.text.label)}
            components={item.text.links?.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="main"
                textUnderline
                hover="underline-none"
              />
            ))}
          />
        ),
      }))}
    />
  );
};

export { Reasons };
