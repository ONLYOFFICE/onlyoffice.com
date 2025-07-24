import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { OnlineDocumentConverterTemplate } from "@src/components/templates/OnlineDocumentConverter";
import { Footer } from "@src/components/modules/Footer";
import { getConversionRate } from "@src/lib/requests/getConverionRate";
import { IRating } from "@src/components/modules/converter/Hero/sub-components/steps/DownloadFile/sub-components/Rating";

const OnlineDocumentConverterPage = ({
  locale,
  ratingData,
}: ILocale & IRating) => {
  const { t } = useTranslation("online-document-converter");

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
            buttonId: "oo-menu-item-btn-products",
            linkId: "oo-menu-link-other-editors-online-converters",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <OnlineDocumentConverterTemplate ratingData={ratingData} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const ratingData = await getConversionRate({
    pageName: "online_document_converter",
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "online-document-converter",
        "converter",
      ])),
      locale,
      ratingData,
    },
  };
}

export default OnlineDocumentConverterPage;
