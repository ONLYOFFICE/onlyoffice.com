import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { CustomRoomsTemplate } from "@src/components/templates/CustomRooms";

const CustomRoomsPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("custom-rooms");

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
            linkId: "oo-menu-link-docspace-custom-rooms",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <CustomRoomsTemplate locale={locale} />
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
        "custom-rooms",
        "RoomsFeatures",
        "RoomsGetStarted",
        "RoomsFaq",
        "Tabs",
        "FaqCollapse",
      ])),
      locale,
    },
  };
}

export default CustomRoomsPage;
