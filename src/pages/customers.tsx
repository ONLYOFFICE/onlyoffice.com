import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { CustomersTemplate } from "@src/components/templates/Customers";
import { Footer } from "@src/components/modules/Footer";
import { getCustomers } from "@src/lib/requests/getCustomers";
import { ICustomers } from "@src/components/templates/Customers/Customers.types";

const CustomersPage = ({ locale, customers }: ILocale & ICustomers) => {
  const { t } = useTranslation("customers");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} titleOG={t("PageTitleOG")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <CustomersTemplate customers={customers} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const { customers } = await getCustomers(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "customers",
      ])),
      locale,
      customers
    },
  };
}

export default CustomersPage;
