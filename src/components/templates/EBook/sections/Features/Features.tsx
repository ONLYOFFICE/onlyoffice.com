import { Trans, useTranslation } from "next-i18next";
import { items, tabs } from "./data/items";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";
import { EditorsTabs } from "@src/components/modules/editors/EditorsTabs";
import { useRouter } from "next/router";
import { Link } from "@src/components/ui/Link";

const Features = () => {
  const { t } = useTranslation("e-book");
  const { locale } = useRouter();

  return (
    <>
      <EditorsTabs items={tabs} t={t} />
      <EditorsFeatures
        items={items.map((items) => ({
          ...items,
          id: items.id,
          heading: t(String(items.heading)),
          text:
            locale !== "pt" ? (
              t(String(items.text))
            ) : (
              <Trans
                t={t}
                i18nKey={String(items.text)}
                components={[
                  <Link
                    href="/app-directory"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                ]}
              />
            ),
          links:
            locale !== "pt"
              ? items.links?.map((link) => ({
                  ...link,
                  label: t(String(link.label)),
                }))
              : undefined,
          image: {
            url: t(items.image.url),
            url2x: items.image.url2x && t(items.image.url2x),
            height: items.image.height,
          },
        }))}
        buttons={false}
      />
    </>
  );
};

export { Features };
