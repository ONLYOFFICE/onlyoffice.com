import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { WrongPortalNameTemplate } from "@src/components/templates/WrongPortalName";
import { Footer } from "@src/components/modules/Footer";

const InstallFeedbackPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("wrongportalname");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <WrongPortalNameTemplate />
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
        "wrongportalname",
      ])),
      locale,
    },
  };
};

export default InstallFeedbackPage;
