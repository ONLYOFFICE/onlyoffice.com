import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const FAQ = () => {
  const { t } = useTranslation("solutions");
  const { locale } = useRouter();
  const [showItems, setShowItems] = useState(items);

  useEffect(() => {
    if (locale === "zh") {
      setShowItems(items.slice(1, 4));
    }
  }, [locale]);

  return (
    <FaqCollapse
      items={showItems.map(({ label, children, links }) => ({
        label: t(label),
        content: (
          <Trans
            t={t}
            i18nKey={String(children)}
            components={links?.map(({ href, isExternal }, index) => (
              <Link
                href={href}
                key={index}
                target={isExternal ? "_blank" : undefined}
              />
            ))}
          />
        ),
      }))}
    />
  );
};

export { FAQ };
