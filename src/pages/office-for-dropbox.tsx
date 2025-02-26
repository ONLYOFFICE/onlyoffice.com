import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Header } from "@src/components/modules/Header";
import { OfficeForDropboxTemplate } from "@src/components/templates/OfficeForDropbox";
import { Footer } from "@src/components/modules/Footer";

const OfficeForDropboxPage = ({ locale }: ILocale) => {
  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <OfficeForDropboxTemplate />
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
        "office-for-dropbox",
        "connectors",
      ])),
      locale,
    },
  };
}

export default OfficeForDropboxPage;
