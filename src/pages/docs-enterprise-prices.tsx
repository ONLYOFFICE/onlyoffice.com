import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { DocsEnterprisePricesTemplate } from "@src/components/templates/DocsEnterprisePrices";
import { Footer } from "@src/components/modules/Footer";

const DocsEnterprisePricesPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("docs-enterprise-prices");

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
        <DocsEnterprisePricesTemplate locale={locale} />
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
        "docs-enterprise-prices",
        "PricingReseller",
        "PricingQuoteModal",
        "PhoneInput",
      ])),
      locale,
    },
  };
}

export default DocsEnterprisePricesPage;
