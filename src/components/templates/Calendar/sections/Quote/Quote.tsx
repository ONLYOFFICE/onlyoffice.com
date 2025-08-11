import { useTranslation } from "next-i18next";
import { CollaborationQuote } from "@src/components/modules/collaborations/CollaborationQuote";

const Quote = () => {
  const { t } = useTranslation("calendar");

  return (
    <CollaborationQuote
      heading={t("EasyToUse")}
      text={t("PcMag")}
      button={{
        id: "calendar-quote-button",
        href: "/download-workspace?from=calendar",
        label: t("GetItNow"),
      }}
    />
  );
};

export { Quote };
