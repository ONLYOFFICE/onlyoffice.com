import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { ILocale } from "@src/types/locale";
import { getLink } from "@src/utils/getLink";

const Faq = ({ locale }: ILocale) => {
  const { t } = useTranslation("office-for-educators");

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
                href={
                  href === "templatesLink" ? getLink("templates", locale) : href
                }
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
