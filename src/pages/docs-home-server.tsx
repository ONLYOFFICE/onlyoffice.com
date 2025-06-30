import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { getPricesWithUrls } from "@src/lib/requests/getPricesWithUrls";
import { DocsHomeServerEntries } from "@src/components/templates/DocsHomeServer/data/productEntries";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DocsHomeServerTemplate,
  IDocsHomeServerTemplate,
} from "@src/components/templates/DocsHomeServer";
import { Footer } from "@src/components/modules/Footer";

const DocsHomeServerPage = ({
  locale,
  productsData,
}: IDocsHomeServerTemplate) => {
  const { t } = useTranslation("docs-home-server");

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
            linkId: "oo-menu-link-pricing-docs-home-server",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DocsHomeServerTemplate locale={locale} productsData={productsData} />
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
    entries: DocsHomeServerEntries({ locale }),
    PaymentSystemId: "9",
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docs-home-server",
        "PricingReseller",
      ])),
      locale,
      productsData,
    },
  };
}

export default DocsHomeServerPage;
