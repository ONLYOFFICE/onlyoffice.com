import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { Head } from "@src/components/modules/head/Head";
import { AccessibilityTemplate } from "@src/components/templates/Accessibility/Accessibility";

const AccessibilityPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("accessibility");
  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <AccessibilityTemplate />
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
      ...(await serverSideTranslations(locale, ["common", "accessibility"])),
      locale,
    },
  };
};

export default AccessibilityPage;
