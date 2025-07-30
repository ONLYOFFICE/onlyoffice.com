import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { DocumentBuilderTemplate } from "@src/components/templates/DocumentBuilder";

const DocumentBuilderPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("document-builder");

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
        highlight={{
            buttonId: "oo-menu-item-btn-developers",
            linkId: "oo-menu-link-document-builder",
        }} />
      </Layout.Header>
      <Layout.Main>
        <DocumentBuilderTemplate />
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
        "document-builder",
      ])),
      locale,
    },
  };
}

export default DocumentBuilderPage;
