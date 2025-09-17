import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { PDFEditorTemplate } from "@src/components/templates/PDFEditor";

const PDFEditorPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("pdf-editor");

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
            linkId: "oo-menu-link-docs-pdf-editor",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <PDFEditorTemplate locale={locale} />
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
        "pdf-editor",
        "GetStarted",
        "Editors",
        "FaqCollapse",
      ])),
      locale,
    },
  };
}

export default PDFEditorPage;
