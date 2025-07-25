import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { InstallationSuccessDocsCloud } from "@src/components/templates/InstallationSuccessDocsCloud";
import { Footer } from "@src/components/modules/Footer";

const InstallationSuccessPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("installation-success-docs-cloud");

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
        <InstallationSuccessDocsCloud />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const locale = context.locale || "en";
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "installation-success-docs-cloud",
      ])),
      locale,
    },
  };
};

export default InstallationSuccessPage;
