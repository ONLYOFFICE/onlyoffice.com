import { useTranslation } from "next-i18next";
import { CollaborationQuote } from "@src/components/modules/collaborations/CollaborationQuote";

const Quote = () => {
  const { t } = useTranslation("crm");

  return (
    <CollaborationQuote
      heading={t("ItIsPrettyNice")}
      text={t("LiveEnterprise")}
      button={{
        id: "crm-quote-button",
        href: "/download-workspace?from=crm",
        label: t("GetItNow"),
      }}
    />
  );
};

export { Quote };
