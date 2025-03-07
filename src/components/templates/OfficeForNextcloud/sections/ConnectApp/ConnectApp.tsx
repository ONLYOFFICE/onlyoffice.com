import { useTranslation } from "next-i18next";
import { LetUsKnowBanner } from "@src/components/modules/LetUsKnowBanner";

const ConnectApp = () => {
  const { t } = useTranslation("office-for-nextcloud");

  return <LetUsKnowBanner heading={t("NeedAnAppToConnect")} />;
};

export { ConnectApp };
