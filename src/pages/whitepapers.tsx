import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { WhitePapersTemplate } from "@src/components/templates/WhitePapers";

const WhitePapersPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("whitepapers");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("WhitepapersPageTitle")} description={t("WhitepapersMetaDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-resources",
            linkId: "oo-menu-link-white-papers"
          }}
          theme="white"
          backgroundColor="#3d3d3d"
          borderColor="#3d3d3d"
          onScrollBorderColor="#3d3d3d"
          onScrollBackgroundColor="#3d3d3d"
          onScrollChangeTheme={false}
        />
      </Layout.Header>
      <Layout.Main>
        <WhitePapersTemplate locale={locale} />
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
        "whitepapers"
      ])),
      locale,
    },
  };
}

export default WhitePapersPage;
