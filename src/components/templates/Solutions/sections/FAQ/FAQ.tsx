import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const FAQ = () => {
  const { t } = useTranslation("solutions");

  return (
    <FaqCollapse
      items={items.map(({ label, children, links }) => ({
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
