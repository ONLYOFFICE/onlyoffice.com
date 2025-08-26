import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { DocumentEditorComparisonTemplate } from "@src/components/templates/DocumentEditorComparison";

const DocumentEditorComparisonPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("document-editor-comparison");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <DocumentEditorComparisonTemplate />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getServerSideProps({ locale }: ILocale) {
  if (locale === "zh") {
    return {
      redirect: {
        destination: `/${locale}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "document-editor-comparison",
        "GetStarted",
      ])),
      locale,
    },
  };
}

export default DocumentEditorComparisonPage;
