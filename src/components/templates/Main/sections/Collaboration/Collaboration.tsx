import { useTranslation, Trans } from "next-i18next";
import { FeatureTabs } from "@src/components/modules/FeatureTabs";
import { items } from "./data/items";

const Collaboration = () => {
  const { t } = useTranslation("main");

  return (
    <FeatureTabs
      tabletSpacing={["80px", "112px"]}
      mobileSpacing={["32px", "48px"]}
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
      items={items.map(({ label, images }) => ({
        label: t(label),
        images,
      }))}
    />
  );
};

export { Collaboration };
