import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  IDownloadTemplate,
  PartnershipRequestTemplate
} from "@src/components/templates/PartnershipRequest";
import { Footer } from "@src/components/modules/Footer";

const DownloadPage = ({
  locale,
}: IDownloadTemplate) => {
  const { t } = useTranslation("partnership-request");

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
            buttonId: "oo-menu-item-btn-partners",
            linkId: "oo-menu-link-submit-request",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <PartnershipRequestTemplate
          locale={locale}
        />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "partnership-request",
        "DownloadModal",
        "PhoneInput",
      ])),
      locale,
    },
  };
}

export default DownloadPage;
