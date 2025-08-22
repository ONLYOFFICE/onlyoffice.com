import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { NonprofitOrganizationsTemplate } from "@src/components/templates/NonprofitOrganizations";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";

const NonprofitOrganizationsPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("nonprofit-organizations");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t("PageTitle")}
          titleOG={t("PageTitleOG")}
          description={t("PageDescription")}
        />
      </Layout.Head>
      <Layout.Header>
        <Header
          borderColor="#F5F5F5"
          backgroundColor="#F5F5F5"
          locale={locale}
        />
      </Layout.Header>
      <Layout.Main>
        <NonprofitOrganizationsTemplate />
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
        "nonprofit-organizations",
      ])),
      locale,
    },
  };
}

export default NonprofitOrganizationsPage;
