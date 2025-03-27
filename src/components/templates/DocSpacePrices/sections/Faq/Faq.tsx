import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const { t } = useTranslation("docspace-prices");

  return (
    <FaqCollapse
      items={items.map(({ label, children, links }) => ({
        label: t(label),
        content: React.isValidElement(children) ? (
          children
        ) : links ? (
          <Trans
            t={t}
            i18nKey={String(children)}
            components={links.map(({ href, isExternal }, index) => (
              <Link
                href={href}
                key={index}
                target={isExternal ? "_blank" : undefined}
              />
            ))}
          />
        ) : (
          t(String(children))
        ),
      }))}
    />
  );
};

export { Faq };
