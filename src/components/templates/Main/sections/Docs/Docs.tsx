import { useTranslation, Trans } from "next-i18next";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Docs = () => {
  const { t } = useTranslation("main");

  return (
    <FeatureTabs
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["80px", "56px"]}
      mobileSpacing={["48px", "32px"]}
      heading={
        <Trans
          t={t}
          i18nKey="OODocsTheMostCompleteOfficeSuite"
          components={[<span key="0" />]}
        />
      }
      linkId="docs-learn-more"
      linkName={t("LearnMoreAboutOODocsFeatures")}
      linkUrl="/office-suite"
      position="right"
      items={items.map(({ label, links, images }) => ({
        label: links ? (
          <Trans
            t={t}
            i18nKey={label}
            components={links.map(({ id, url }, index) => (
              <Link
                id={id}
                key={index}
                href={url}
                color="main"
                textUnderline
                hover="underline-none"
              />
            ))}
          />
        ) : (
          t(label)
        ),
        images,
      }))}
    />
  );
};

export { Docs };
