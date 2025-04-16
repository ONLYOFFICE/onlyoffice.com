import { useTranslation } from "next-i18next";
import { PartnershipProgram } from "@src/components/modules/PartnershipProgram";

const Partner = () => {
  const { t } = useTranslation("office-for-nextcloud");

  return (
    <PartnershipProgram heading={t("PartnerHeading")} text={t("PartnerText")} />
  );
};

export { Partner };
