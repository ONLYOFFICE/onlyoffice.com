import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { getPricesWithUrls } from "@src/lib/requests/getPricesWithUrls";
import { DocSpaceFamilyPackEntries } from "@src/components/templates/DocSpaceFamilyPack/data/productEntries";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DocSpaceFamilyPackTemplate,
  IDocSpaceFamilyPackTemplate,
} from "@src/components/templates/DocSpaceFamilyPack";
import { Footer } from "@src/components/modules/Footer";

const DocSpaceFamilyPackPage = ({
  locale,
  productsData,
}: IDocSpaceFamilyPackTemplate) => {
  const { t } = useTranslation("docspace-family-pack");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <DocSpaceFamilyPackTemplate
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
    entries: DocSpaceFamilyPackEntries({ locale }),
    PaymentSystemId: "1",
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docspace-family-pack",
        "PricingReseller",
      ])),
      locale,
      productsData,
    },
  };
}

export default DocSpaceFamilyPackPage;
