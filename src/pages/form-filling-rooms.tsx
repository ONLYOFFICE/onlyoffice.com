import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { FormFillingRoomsTemplate } from "@src/components/templates/FormFillingRooms";

const FormFillingRoomsPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("form-filling-rooms");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-products",
            linkId: "oo-menu-link-docspace-form-filling-rooms",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <FormFillingRoomsTemplate />
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
        "form-filling-rooms",
        "RoomsFeatures",
        "RoomsGetStarted",
        "RoomsFaq",
        "RoomsTabs",
      ])),
      locale,
    },
  };
}

export default FormFillingRoomsPage;
