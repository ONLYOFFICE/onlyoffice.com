import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { Head } from "@src/components/modules/head/Head";
import { AboutTemplate } from "@src/components/templates/About";
import { getAbouts } from "@src/lib/requests/getAbouts";
import { IAbouts } from "@src/components/templates/About/About.types";

const AboutPage = ({ locale, abouts }: ILocale & IAbouts) => {
  const { t } = useTranslation("about");
  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} titleOG={t("PageTitleOG")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{ buttonId: "oo-menu-item-btn-products" }}
        />
      </Layout.Header>
      <Layout.Main>
        <AboutTemplate abouts={abouts} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: ILocale) => {
  const abouts = await getAbouts(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
      locale,
      abouts
    },
  };
};

export default AboutPage;
