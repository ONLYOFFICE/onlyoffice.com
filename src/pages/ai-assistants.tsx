import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { AiAssistantsTemplate } from "@src/components/templates/AiAssistants";

const AiAssistantsPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("ai-assistants");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <AiAssistantsTemplate />
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
      ...(await serverSideTranslations(locale, ["common", "ai-assistants"])),
      locale,
    },
  };
}

export default AiAssistantsPage;
