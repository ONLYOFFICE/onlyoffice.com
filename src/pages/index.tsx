import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Footer } from "@src/components/modules/Footer";
import { Header } from "@src/components/modules/Header";
import { MainTemplate } from "@src/components/templates/Main";

interface IMainPage {
  locale: string;
}

const MainPage = ({ locale }: IMainPage) => {
  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <MainTemplate locale={locale} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: IMainPage) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "main",
        "security-first",
      ])),
      locale,
    },
  };
}

export default MainPage;
