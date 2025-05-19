import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { InstallationSuccessWorkspaceEnterpriseTemplate } from "@src/components/templates/InstallationSuccessWorkspaceEnterprise";
import { Footer } from "@src/components/modules/Footer";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";

const InstallationSuccessWorkspaceEnterprise = ({ locale }: ILocale) => {
  const { t } = useTranslation("installation-success-workspace-enterprise");

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
        <InstallationSuccessWorkspaceEnterpriseTemplate />
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
        "installation-success-workspace-enterprise",
      ])),
      locale,
    },
  };
};

export default InstallationSuccessWorkspaceEnterprise;
