import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { MainTemplate } from "@src/components/templates/Main";

const MainPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("main");

  return (
    <Layout>
      <Layout.Head>
        <Head
          title={t("PageTitle")}
          description={t("PageDescription")}
          titleOG={t("PageTitleOG")}
        />
      </Layout.Head>
      <Layout.Main>
        <MainTemplate locale={locale} />
      </Layout.Main>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "main",
        "SecurityFirst",
        "GetStarted",
      ])),
      locale,
    },
  };
}

export default MainPage;
