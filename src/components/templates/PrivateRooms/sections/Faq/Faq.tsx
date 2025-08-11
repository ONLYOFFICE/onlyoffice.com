import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const { t } = useTranslation("private-rooms");

  return (
    <FaqCollapse
      tabletSpacing={["72px", "112px"]}
      mobileSpacing={["48px", "64px"]}
      items={items.map(({ label, children, links }) => ({
        label: t(label),
        content: links ? (
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
        ) : (
          <Trans t={t} i18nKey={String(children)} components={{ br: <br /> }} />
        ),
      }))}
    />
  );
};

export { Faq };
