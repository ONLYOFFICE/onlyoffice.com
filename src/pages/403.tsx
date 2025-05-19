import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@src/types/locale";
import { MaintenanceHead } from "@src/components/modules/head/MaintenanceHead";
import { MaintenanceTemplate } from "@src/components/templates/Maintenance";

const Error403Page = () => {
  return (
    <>
      <MaintenanceHead title="ONLYOFFICE is on maintenance" />
      <MaintenanceTemplate text="Sorry, Forbidden" />
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
