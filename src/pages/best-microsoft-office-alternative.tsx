import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { BestMicrosoftOfficeAlternativeTemplate } from "@src/components/templates/BestMicrosoftOfficeAlternative";

const BestMicrosoftOfficeAlternativePage = ({ locale }: ILocale) => {
  const { t } = useTranslation("best-microsoft-office-alternative");

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
        <BestMicrosoftOfficeAlternativeTemplate />
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
        "best-microsoft-office-alternative",
        "BestAlternativeCompatibility",
        "BestAlternativeCompare",
        "BestAlternativeGetStarted",
      ])),
      locale,
    },
  };
}

export default BestMicrosoftOfficeAlternativePage;
