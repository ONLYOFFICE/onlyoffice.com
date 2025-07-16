import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { VirtualDataRoomsTemplate } from "@src/components/templates/VirtualDataRooms";

const VirtualDataRoomsPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("virtual-data-rooms");

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
          highlight={{
            buttonId: "oo-menu-item-btn-products",
            linkId: "oo-menu-link-docspace-virtual-data-rooms",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <VirtualDataRoomsTemplate />
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
        "virtual-data-rooms",
        "RoomsFeatures",
        "RoomsGetStarted",
        "RoomsFaq",
        "RoomsTabs",
        "FaqCollapse",
      ])),
      locale,
    },
  };
}

export default VirtualDataRoomsPage;
