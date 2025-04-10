import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/Head";
import { Header } from "@src/components/modules/Header";
import { EventsTemplate } from "@src/components/templates/Events";
import { Footer } from "@src/components/modules/Footer";
import { getEvents } from "@src/lib/requests/getEvents";
import { IEvents } from "@src/components/templates/Events";

const EventsPage = ({ locale, events }: ILocale & IEvents) => {
  const { t } = useTranslation("events");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t("PageTitle")}
          description={t("PageDescription")}
          titleOG={t("PageTitleOG")}
        />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <EventsTemplate events={events} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const events = await getEvents(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "events"])),
      locale,
      events,
    },
  };
}

export default EventsPage;
