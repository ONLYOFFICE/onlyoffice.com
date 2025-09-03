import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from "next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Footer } from "@src/components/modules/Footer";
import { DocsRegistrationTemplate } from "@src/components/templates/DocsRegistration";

const DocsRegistrationPage = ({
  locale,
}: ILocale) => {
  const { t } = useTranslation("docs-registration");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Main>
        <DocsRegistrationTemplate />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext & ILocale) {

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docs-registration",
        "Select",
      ])),
      locale,
    },
  };
}

export default DocsRegistrationPage;
