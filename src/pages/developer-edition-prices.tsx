import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/Head";
import { Header } from "@src/components/modules/Header";
import { DeveloperEditionPricesTemplate } from "@src/components/templates/DeveloperEditionPrices";
import { Footer } from "@src/components/modules/Footer";

const DeveloperEditionPricesPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("developer-edition-prices");

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
        <DeveloperEditionPricesTemplate locale={locale} />
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
        "developer-edition-prices",
        "PricingForDevelopersFaq",
        "PricingQuoteModal",
        "PhoneInput",
      ])),
      locale,
    },
  };
}

export default DeveloperEditionPricesPage;
