import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { DiagramViewerTemplate } from "@src/components/templates/DiagramViewer";
import { Footer } from "@src/components/modules/Footer";

const DiagramViewerPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("diagram-viewer");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("DVPageTitle")} description={t("DVMetaDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          theme="white"
          highlight={{
            buttonId: "oo-menu-item-btn-products",
            linkId: "oo-menu-link-docs-diagram-viewer"
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DiagramViewerTemplate />
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
        "diagram-viewer",
        "FaqCollapse",
        "GetStarted",
        "Editors",
        "Tabs"
      ])),
      locale,
    },
  };
}

export default DiagramViewerPage;