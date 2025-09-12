import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { MaintenanceHead } from "@src/components/modules/head/MaintenanceHead";
import { MaintenanceTemplate } from "@src/components/templates/Maintenance";

const Error403Page = () => {
  const { t } = useTranslation("error");
  return (
    <>
      <MaintenanceHead title={t("ONLYOFFICE is on maintenance")} />
      <MaintenanceTemplate text={t("Sorry, Forbidden")} />
    </>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "error"])),
    },
  };
}

export default Error403Page;
