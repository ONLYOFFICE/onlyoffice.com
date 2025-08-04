import { useTranslation } from "next-i18next";
import { CollaborationQuote } from "@src/components/modules/collaborations/CollaborationQuote";

const Quote = () => {
  const { t } = useTranslation("community");

  return (
    <CollaborationQuote
      heading={t("EasyToUse")}
      text={t("PcMag")}
      button={{
        id: "community-quote-button",
        href: "/download-workspace?from=community",
        label: t("GetItNow"),
      }}
    />
  );
};

export { Quote };
