import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DownloadTemplate,
  IDownloadTemplate,
} from "@src/components/templates/Download";
import { Footer } from "@src/components/modules/Footer";
import { getProductsDetails } from "@src/lib/requests/getProductsDetails";
import { docsProducts } from "@src/components/templates/Download/sections/Hero/data/docsData";
import { docspaceProducts } from "@src/components/templates/Download/sections/Hero/data/docspaceData";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";

const DownloadPage = ({
  locale,
  docsProducts,
  docspaceProducts,
}: IDownloadTemplate) => {
  const { t } = useTranslation("download");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            linkId: "oo-menu-link-enterprise-prices",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <DownloadTemplate
          locale={locale}
          docsProducts={docsProducts}
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
      "DocSpace",
      "DocumentServer",
      "onlyoffice4enterprise/documentserver-ee",
    ],
  });

  const mapProducts = (products: IDownloadCard[]) =>
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
        "download",
        "DownloadCard",
        "DownloadModal",
        "PhoneInput",
      ])),
      locale,
      docsProducts: mapProducts(docsProducts),
      docspaceProducts: mapProducts(docspaceProducts),
    },
  };
}

export default DownloadPage;
