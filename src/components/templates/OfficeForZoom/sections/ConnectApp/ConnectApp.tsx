import { useTranslation } from "next-i18next";
import { LetUsKnowBanner } from "@src/components/modules/LetUsKnowBanner";

const ConnectApp = () => {
  const { t } = useTranslation("Connectors");

  return <LetUsKnowBanner heading={t("NeedAnAppToConnect")} />;
};

export { ConnectApp };
