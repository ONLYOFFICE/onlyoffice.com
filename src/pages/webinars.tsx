import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { WebinarsTemplate } from "@src/components/templates/Webinars";
import { getWebinars } from "@src/lib/requests/getWebinars";
import { IWebinars } from "@src/components/templates/Webinars/Webinars.types";

const WebinarsPage = ({ locale, webinars }: ILocale & IWebinars) => {
  const { t } = useTranslation("webinars");

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
        <WebinarsTemplate webinars={webinars} locale={locale} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const webinars = await getWebinars(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "webinars",
      ])),
      locale,
      webinars
    },
  };
}

export default WebinarsPage;
