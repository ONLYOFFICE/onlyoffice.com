import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DownloadCommunityTemplate,
  IDownloadCommunityTemplate,
} from "@src/components/templates/DownloadCommunity";
import { Footer } from "@src/components/modules/Footer";
import { getProductsDetails } from "@src/lib/requests/getProductsDetails";
import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import {
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
} from "@src/components/templates/DownloadCommunity/sections/Hero/data/communityData";
import { docspaceProducts } from "@src/components/templates/DownloadCommunity/sections/Hero/data/docspaceData";

const DownloadCommunityPage = ({
  locale,
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
  docspaceProducts,
}: ILocale & IDownloadCommunityTemplate) => {
  const { t } = useTranslation("download-community");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <DownloadCommunityTemplate
          communityProducts={communityProducts}
          bundlesWithOwnCloudProducts={bundlesWithOwnCloudProducts}
          bundlesWithNextcloudProducts={bundlesWithNextcloudProducts}
          docspaceProducts={docspaceProducts}
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
      "snap-documentserver",
      "com.onlyoffice.coudronapp",
      "onlyoffice-owncloud",
      "onlyoffice-nextcloud",
      "Docspace",
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
        "download-community",
        "DownloadCard",
      ])),
      locale,
      communityProducts: mapProducts(communityProducts),
      bundlesWithOwnCloudProducts: mapProducts(bundlesWithOwnCloudProducts),
      bundlesWithNextcloudProducts: mapProducts(bundlesWithNextcloudProducts),
      docspaceProducts: mapProducts(docspaceProducts),
    },
  };
}

export default DownloadCommunityPage;
