import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DownloadDocsTemplate,
  IDownloadDocsTemplate,
} from "@src/components/templates/DownloadDocs";
import { Footer } from "@src/components/modules/Footer";
import { getProductsDetails } from "@src/lib/requests/getProductsDetails";
import { enterpriseProducts } from "@src/components/templates/DownloadDocs/sections/Hero/data/enterpriseData";
import { developerProducts } from "@src/components/templates/DownloadDocs/sections/Hero/data/developerData";
import {
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
} from "@src/components/templates/DownloadDocs/sections/Hero/data/communityData";
import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

const DownloadDocsPage = ({
  locale,
  enterpriseProducts,
  developerProducts,
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
}: IDownloadDocsTemplate) => {
  const { t } = useTranslation("download-docs");

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
        <DownloadDocsTemplate
          locale={locale}
          enterpriseProducts={enterpriseProducts}
          developerProducts={developerProducts}
          communityProducts={communityProducts}
          bundlesWithOwnCloudProducts={bundlesWithOwnCloudProducts}
          bundlesWithNextcloudProducts={bundlesWithNextcloudProducts}
        />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const productsDetails = await getProductsDetails({
    key: [
      "DocumentServer",
      "onlyoffice4enterprise/documentserver-ee",
      "snap-documentserver",
      "com.onlyoffice.coudronapp",
      "onlyoffice-owncloud",
      "onlyoffice-nextcloud",
    ],
  });

  const mapProducts = (products: IDownloadBlock[]) =>
    products.map((item) => {
      const nameKey = Array.isArray(item.nameKey)
        ? item.nameKey[0]
        : item.nameKey;
      const db = nameKey ? productsDetails?.[nameKey] : undefined;
      return {
        ...item,
        version: db?.version?.trim() || item.version,
        releaseDate: db?.lastmodified || item.releaseDate,
      };
    });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "download-docs",
        "DownloadCard",
        "DownloadModal",
        "PhoneInput",
      ])),
      locale,
      enterpriseProducts: mapProducts(enterpriseProducts),
      developerProducts: mapProducts(developerProducts),
      communityProducts: mapProducts(communityProducts),
      bundlesWithOwnCloudProducts: mapProducts(bundlesWithOwnCloudProducts),
      bundlesWithNextcloudProducts: mapProducts(bundlesWithNextcloudProducts),
    },
  };
}

export default DownloadDocsPage;
