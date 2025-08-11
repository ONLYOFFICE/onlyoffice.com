import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Academy } from "@src/components/templates/Academy";
import { Footer } from "@src/components/modules/Footer";

const AcademyPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("academy");

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
            buttonId: "oo-menu-item-btn-resources",
            linkId: "oo-menu-link-academy",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <Academy />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: ILocale) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "academy",
        "FaqCollapse",
      ])),
      locale,
    },
  };
};

export default AcademyPage;
