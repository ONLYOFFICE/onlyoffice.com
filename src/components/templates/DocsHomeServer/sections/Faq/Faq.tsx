import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const { t } = useTranslation("docs-home-server");

  return (
    <FaqCollapse
      items={items.map(({ label, children, links = [] }) => ({
        label: t(label),
        content: (
          <Trans
            t={t}
            i18nKey={String(children)}
            components={[
              ...links.map((link, index) => (
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  key={index}
                />
              )),
              <br key="br" />,
            ]}
          />
        ),
      }))}
    />
  );
};

export { Faq };
