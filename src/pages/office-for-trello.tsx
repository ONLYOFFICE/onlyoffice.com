import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { OfficeForTrelloTemplate } from "@src/components/templates/OfficeForTrello";
import { Footer } from "@src/components/modules/Footer";

const OfficeForTrelloPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("office-for-trello");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} theme="white" />
      </Layout.Header>
      <Layout.Main>
        <OfficeForTrelloTemplate />
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
        "office-for-trello",
        "Connectors",
      ])),
      locale,
    },
  };
}

export default OfficeForTrelloPage;
