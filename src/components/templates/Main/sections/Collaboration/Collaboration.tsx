import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { collaborationItems } from "./data/collaborationItems";

const Collaboration = () => {
  const { t } = useTranslation("main");

  return (
    <Section tabletSpacing={["80px", "112px"]} mobileSpacing={["32px", "48px"]}>
      <FeatureTabs
        heading={
          <Trans
            t={t}
            i18nKey="DesignedToMakeCollaborationSeamless"
            components={[<span key="0" />]}
          />
        }
        linkId="collaboration-learn-more"
        linkName={t("LearnMoreAboutOOCollaborationFeatures")}
        linkUrl="/seamless-collaboration.aspx"
        items={collaborationItems.map(({ label, images }) => ({
          label: t(label),
          images,
        }))}
      />
    </Section>
  );
};

export { Collaboration };
