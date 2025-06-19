import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { getPricesWithUrls } from "@src/lib/requests/getPricesWithUrls";
import { DeveloperEditionPricesEntries } from "@src/components/templates/DeveloperEditionPrices/data/productEntries";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DeveloperEditionPricesTemplate,
  IDeveloperEditionPricesTemplate,
} from "@src/components/templates/DeveloperEditionPrices";
import { Footer } from "@src/components/modules/Footer";

const DeveloperEditionPricesPage = ({
  locale,
  productsData,
}: IDeveloperEditionPricesTemplate) => {
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
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-pricing",
            linkId: "oo-menu-link-pricing-docs-developer",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DeveloperEditionPricesTemplate
          locale={locale}
          productsData={productsData}
        />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const currency = getCurrencyByLocale(locale);

  const productsData = await getPricesWithUrls({
    locale,
    currency: currency.code,
    entries: DeveloperEditionPricesEntries({ locale }),
    PaymentSystemId: "9",
  });

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
      productsData,
    },
  };
}

export default DeveloperEditionPricesPage;
