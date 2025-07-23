import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Footer } from "@src/components/modules/Footer";
import { DocSpaceRegistrationTemplate } from "@src/components/templates/DocSpaceRegistration";

const DocSpaceRegistrationPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("docspace-registration");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Main>
        <DocSpaceRegistrationTemplate />
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
        "docspace-registration",
      ])),
      locale,
    },
  };
}

export default DocSpaceRegistrationPage;
