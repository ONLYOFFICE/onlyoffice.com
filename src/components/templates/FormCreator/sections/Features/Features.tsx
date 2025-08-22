import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { Link } from "@src/components/ui/Link";

const Features = () => {
  const { t, i18n } = useTranslation("form-creator");
  const locale = i18n.language;

  return (
    <EditorsFeatures
      items={items.map((item, index) => ({
        ...item,
        heading: t(String(item.heading)),
        comingSoon:
          locale === "it" && index === 4
            ? t("Feature6ComingSoon")
            : item.comingSoon && t(item.comingSoon),
        text: (
          <Trans
            t={t}
            i18nKey={String(item.text)}
            components={item.textLinks?.map((link, index) => (
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
        links: item.links?.map((link) => ({
          ...link,
          label: t(String(link.label)),
        })),
        image: {
          url: t(item.image.url),
          url2x: item.image.url2x && t(item.image.url2x),
          height: item.image.height,
        },
      }))}
      buttons={false}
    />
  );
};

export { Features };

