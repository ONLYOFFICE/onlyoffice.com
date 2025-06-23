import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { OfficeForWordpressTemplate } from "@src/components/templates/OfficeForWordpress";
import { Footer } from "@src/components/modules/Footer";

const OfficeForWordpressPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("office-for-wordpress");

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
            buttonId: "oo-menu-item-btn-products",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <OfficeForWordpressTemplate />
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
        "office-for-wordpress",
        "Connectors",
      ])),
      locale,
    },
  };
}

export default OfficeForWordpressPage;
