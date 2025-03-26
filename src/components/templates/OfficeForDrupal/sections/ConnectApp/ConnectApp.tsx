import { useTranslation } from "next-i18next";
import { LetUsKnowBanner } from "@src/components/modules/LetUsKnowBanner";

const ConnectApp = () => {
  const { t } = useTranslation("office-for-drupal");

  return <LetUsKnowBanner heading={t("NeedAnAppToConnect")} />;
};

export { ConnectApp };
