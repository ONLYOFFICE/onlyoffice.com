import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { OfficeForMondayTemplate } from "@src/components/templates/OfficeForMonday";

const OfficeForMondayPage = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Main>
        <OfficeForMondayTemplate />
      </Layout.Main>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "office-for-monday",
        "Connectors",
      ])),
      locale,
    },
  };
}

export default OfficeForMondayPage;
