import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { BestWpsAlternativeTemplate } from "@src/components/templates/BestWpsAlternative";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";

const BestWpsAlternativePage = ({ locale }: ILocale) => {
  const { t } = useTranslation("best-wps-alternative");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <BestWpsAlternativeTemplate />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  if (locale === "zh") {
    return {
      redirect: {
        destination: `/${locale}`,
        permanent: true,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "best-wps-alternative",
        "BestAlternativeCompatibility",
        "BestAlternativeCompare",
        "best-adobe-alternative",
        "BestAlternativeGetStarted",
      ])),
      locale,
    },
  };
}

export default BestWpsAlternativePage;
