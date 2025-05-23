import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { InstallationSuccessGroupsTemplate } from "@src/components/templates/InstallationSuccessGroups";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";

const InstallationSuccessPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("installation-success-groups");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <InstallationSuccessGroupsTemplate />
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
        "installation-success-groups",
      ])),
      locale,
    },
  };
};

export default InstallationSuccessPage;
