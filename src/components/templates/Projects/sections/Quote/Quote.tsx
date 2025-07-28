import { useTranslation } from "next-i18next";
import { CollaborationQuote } from "@src/components/modules/collaborations/CollaborationQuote";

const Quote = () => {
  const { t } = useTranslation("projects");

  return (
    <CollaborationQuote
      heading={t("ItsAPerfectTool")}
      text={t("CmsWire")}
      button={{
        id: "projects-quote-button",
        href: "/download-workspace?from=projects",
        label: t("GetItNow"),
      }}
    />
  );
};

export { Quote };
