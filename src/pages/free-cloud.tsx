import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { FreeCloudTemplate } from "@src/components/templates/FreeCloud";

const FreeCloudPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("free-cloud");

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
          backgroundColor="#f5f5f5"
          borderColor="#f5f5f5"
          onScrollBackgroundColor="#f5f5f5"
          onScrollBorderColor="#f5f5f5"
        />
      </Layout.Header>
      <Layout.Main>
        <FreeCloudTemplate />
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
        "free-cloud",
        "FaqCollapse",
      ])),
      locale,
    },
  };
}

export default FreeCloudPage;
