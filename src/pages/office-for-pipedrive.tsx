import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { OfficeForPipedriveTemplate } from "@src/components/templates/OfficeForPipedrive";
import { Footer } from "@src/components/modules/Footer";

const OfficeForPipedrivePage = ({ locale }: ILocale) => {
  const { t } = useTranslation("office-for-pipedrive");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          theme="white"
          highlight={{
            buttonId: "oo-menu-item-btn-products",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <OfficeForPipedriveTemplate />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "office-for-pipedrive",
        "Connectors",
        "PartnershipProgram",
      ])),
      locale,
    },
  };
}

export default OfficeForPipedrivePage;
