import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { getPricesWithUrls } from "@src/lib/requests/getPricesWithUrls";
import { WorkspacePricesEntries } from "@src/components/templates/WorkspacePrices/data/productEntries";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  WorkspacePricesTemplate,
  IWorkspacePricesTemplate,
} from "@src/components/templates/WorkspacePrices";
import { Footer } from "@src/components/modules/Footer";

const WorkspacePricesPage = ({
  locale,
  productsData,
}: IWorkspacePricesTemplate) => {
  const { t } = useTranslation("workspace-prices");

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
            linkId: "oo-menu-link-pricing-workspace",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <WorkspacePricesTemplate locale={locale} productsData={productsData} />
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
    entries: WorkspacePricesEntries({ locale }),
    PaymentSystemId: "9",
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "workspace-prices",
        "PricingReseller",
      ])),
      locale,
      productsData,
    },
  };
}

export default WorkspacePricesPage;
