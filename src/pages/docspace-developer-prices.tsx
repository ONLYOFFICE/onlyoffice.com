import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { DocSpaceDeveloperPricesTemplate } from "@src/components/templates/DocSpaceDeveloperPrices";
import { Footer } from "@src/components/modules/Footer";

const DocSpaceDeveloperPricesPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("docspace-developer-prices");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-pricing",
            linkId: "oo-menu-link-pricing-docspace-developer",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DocSpaceDeveloperPricesTemplate locale={locale} />
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
        "docspace-developer-prices",
        "PricingForDevelopersFaq",
        "PricingQuoteModal",
        "PhoneInput",
      ])),
      locale,
    },
  };
}

export default DocSpaceDeveloperPricesPage;
