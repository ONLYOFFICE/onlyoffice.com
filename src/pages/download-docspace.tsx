import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DownloadDocSpaceTemplate,
  IDownloadDocSpaceTemplate,
} from "@src/components/templates/DownloadDocSpace";
import { Footer } from "@src/components/modules/Footer";
import { getProductsDetails } from "@src/lib/requests/getProductsDetails";
import { enterpriseProducts } from "@src/components/templates/DownloadDocSpace/sections/Hero/data/enterpriseData";
import { communityProducts } from "@src/components/templates/DownloadDocSpace/sections/Hero/data/communityData";
import { IDownloadBlock } from "@src/components/widgets/download/DownloadBlock";

const DownloadDocSpacePage = ({
  locale,
  enterpriseProducts,
  communityProducts,
}: IDownloadDocSpaceTemplate) => {
  const { t } = useTranslation("download-docspace");

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
        <DownloadDocSpaceTemplate
          locale={locale}
          enterpriseProducts={enterpriseProducts}
          communityProducts={communityProducts}
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
    key: ["DocSpace"],
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
        "download-docspace",
        "DownloadCard",
        "DownloadModal",
        "PhoneInput",
      ])),
      locale,
      enterpriseProducts: mapProducts(enterpriseProducts),
      communityProducts: mapProducts(communityProducts),
    },
  };
}

export default DownloadDocSpacePage;
