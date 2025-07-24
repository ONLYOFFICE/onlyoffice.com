import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { FindPartnersTemplate } from "@src/components/templates/FindPartners";
import { getPartners } from "@src/lib/requests/getPartners";
import { IPartners } from "@src/components/templates/FindPartners/FindPartners.types";

const FindPartnersPage = ({ locale, partners }: ILocale & IPartners) => {
  const { t } = useTranslation("find-partners");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} titleOG={t("PageTitleOG")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-partners",
            linkId: "oo-menu-link-find-partners",
          }}
        />
      </Layout.Header>
      <Layout.Main>
        <FindPartnersTemplate partners={partners} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const partners = await getPartners(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "find-partners",
      ])),
      locale,
      partners,
    },
  };
}

export default FindPartnersPage;
