import { useTranslation } from "next-i18next";
import { CollaborationQuote } from "@src/components/modules/collaborations/CollaborationQuote";

const Quote = () => {
  const { t } = useTranslation("mail");

  return (
    <CollaborationQuote
      heading={t("PerfectOnlineCollaboration")}
      text={t("PcMag")}
      button={{
        id: "mail-quote-button",
        href: "/download-workspace?from=mail",
        label: t("GetItNow"),
      }}
    />
  );
};

export { Quote };
