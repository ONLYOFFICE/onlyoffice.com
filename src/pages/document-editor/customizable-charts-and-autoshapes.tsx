import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { CustomizableChartsAndAutoshapesTemplate } from "@src/components/templates/CustomizableChartsAndAutoshapes";

const CustomizableChartsAndAutoshapesPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("customizable-charts-and-autoshapes");

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
          theme="white"
          highlight={{
            buttonId: "oo-menu-item-btn-products",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <CustomizableChartsAndAutoshapesTemplate />
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
        "customizable-charts-and-autoshapes",
        "GetStarted",
        "Editors",
      ])),
      locale,
    },
  };
}

export default CustomizableChartsAndAutoshapesPage;
