import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { PDFDOCXConverterTemplate } from "@src/components/templates/PDFDOCXConverter";
import { Footer } from "@src/components/modules/Footer";
import { getConversionRate } from "@src/lib/requests/getConverionRate";
import { IRating } from "@src/components/modules/converter/Hero/sub-components/steps/DownloadFile/sub-components/Rating";

const PDFDOCXConverterPage = ({ locale, ratingData }: ILocale & IRating) => {
  const { t } = useTranslation("pdf-docx-converter");

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
        <PDFDOCXConverterTemplate ratingData={ratingData} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const ratingData = await getConversionRate({
    pageName: "pdf_converter",
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "pdf-docx-converter",
        "converter",
      ])),
      locale,
      ratingData,
    },
  };
}

export default PDFDOCXConverterPage;
