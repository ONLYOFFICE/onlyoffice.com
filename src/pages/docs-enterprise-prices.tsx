import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { getPricesWithUrls } from "@src/lib/requests/getPricesWithUrls";
import {
  DocsEnterprisePricesBasicEntries,
  DocsEnterprisePricesSupportEntries,
} from "@src/components/templates/DocsEnterprisePrices/data/productEntries";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DocsEnterprisePricesTemplate,
  IDocsEnterprisePricesTemplate,
} from "@src/components/templates/DocsEnterprisePrices";
import { Footer } from "@src/components/modules/Footer";

const DocsEnterprisePricesPage = ({
  locale,
  productsData,
}: IDocsEnterprisePricesTemplate) => {
  const { t } = useTranslation("docs-enterprise-prices");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-pricing",
            linkId: "oo-menu-link-pricing-docs-enterprise",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DocsEnterprisePricesTemplate
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
    entries: DocsEnterprisePricesBasicEntries({ locale }),
    PaymentSystemId: "9",
  });

  const supportDefinitions = DocsEnterprisePricesSupportEntries({ locale });

  for (const { key, base, extra = base } of supportDefinitions) {
    productsData[key] = {
      price: productsData[base].price + productsData[extra].price * 0.5,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docs-enterprise-prices",
        "PricingReseller",
        "PricingQuoteModal",
        "PhoneInput",
        "FaqCollapse",
      ])),
      locale,
      productsData,
    },
  };
}

export default DocsEnterprisePricesPage;
