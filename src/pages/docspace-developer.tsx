import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { DocSpaceDeveloperTemplate } from "@src/components/templates/DocSpaceDeveloper";
import { Footer } from "@src/components/modules/Footer";

const DocSpaceDeveloperPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("docspace-developer");

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
            linkId: "oo-menu-link-pricing-docspace-developer",
          }}
          theme="white"
        />
      </Layout.Header>
      <Layout.Main>
        <DocSpaceDeveloperTemplate />
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
        "docspace-developer",
      ])),
      locale,
    },
  };
}

export default DocSpaceDeveloperPage;
