import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Header } from "@src/components/modules/Header";
import { OfficeForConfluenceTemplate } from "@src/components/templates/OfficeForConfluence";
import { Footer } from "@src/components/modules/Footer";

const OfficeForConfluencePage = ({ locale }: ILocale) => {
  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <OfficeForConfluenceTemplate />
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
        "office-for-confluence",
        "Connectors",
      ])),
      locale,
    },
  };
}

export default OfficeForConfluencePage;
