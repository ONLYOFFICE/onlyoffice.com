import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/Head";
import { Header } from "@src/components/modules/Header";
import { EventsTemplate } from "@src/components/templates/Events";
import { Footer } from "@src/components/modules/Footer";

import getEventsApi from "@lib/requests/getEvents";

interface EventImage {
  id: number;
  url: string;
}

interface Event {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  start_time: string | null;
  end_time: string | null;
  place: string;
  description: string;
  link: string;
  pastlink: string;
  image: EventImage[];
  image_2X: EventImage[];
}

interface EventsPageProps extends ILocale {
  events: Event[] | null;
}

const EventsPage = ({ locale, events }: EventsPageProps) => {
  const { t } = useTranslation("events");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t("pageTitle")}
          description={t("pageDescription")}
          titleOG={t("pageTitleOG")}
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale || "en";

  try {
    const response = await getEventsApi(locale);

    if (!response.data) {
      console.error('No data in API response');
      throw new Error('No data in API response');
    }

    const events = response.data.map((item: {
      id: number;
      documentId: string;
      name: string;
      start_date: string;
      end_date: string;
      start_time: string | null;
      end_time: string | null;
      place: string;
      description: string;
      link: string;
      pastlink: string;
      image: EventImage[];
      image_2X: EventImage[];
    }) => ({
      id: item.id,
      documentId: item.documentId,
      name: item.name,
      start_date: item.start_date,
      end_date: item.end_date,
      start_time: item.start_time,
      end_time: item.end_time,
      place: item.place,
      description: item.description,
      link: item.link,
      pastlink: item.pastlink,
      image: Array.isArray(item.image) ? item.image : [],
      image_2X: Array.isArray(item.image_2X) ? item.image_2X : [],
    }));

    if (events.length === 0) {
      console.warn('No events found in API response');
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "events"])),
        locale,
        events,
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "events"])),
        locale,
        events: null,
      },
    };
  }
};

export default EventsPage;
