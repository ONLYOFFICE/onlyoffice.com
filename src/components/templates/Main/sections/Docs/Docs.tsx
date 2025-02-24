import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { Link } from "@src/components/ui/Link";
import { docsItems } from "./data/docsItems";

const Docs = () => {
  const { t } = useTranslation("main");

  return (
    <Section
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["80px", "56px"]}
      mobileSpacing={["48px", "32px"]}
    >
      <FeatureTabs
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
        items={docsItems.map(({ label, links, images }) => ({
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
    </Section>
  );
};

export { Docs };
