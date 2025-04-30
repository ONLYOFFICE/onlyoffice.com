import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "@src/components/Layout";
import { AdventAnnounceBanner } from "@src/components/modules/AdventAnnounceBanner";
import { Head } from "@src/components/modules/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { SuccessStoriesTemplate } from "@src/components/templates/SuccessStories";
import { data as successStories } from "@src/components/templates/SuccessStories/data/success-stories";
import { GetStaticPropsContext } from "next/types";

const SuccessStoriesPage = ({ locale, params }: GetStaticPropsContext) => {
  const { t } = useTranslation("success-stories");
  const slug = params?.slug ?? "astu";

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounceBanner locale={locale ?? "en"} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t(`${slug}.PageTitle`)}
          description={t(`${slug}.PageDescription`)}
          titleOG={t(`${slug}.PageTitleOG`)}
          descriptionOG={t(`${slug}.headDescriptionOG`)}
        />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale ?? "en"} />
      </Layout.Header>
      <Layout.Main>
        <SuccessStoriesTemplate />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale ?? "en"} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticPaths() {
  const locales = [
    "cs",
    "de",
    "en",
    "es",
    "fr",
    "it",
    "ja",
    "nl",
    "pt",
    "ru",
    // "sr",
    "zh",
  ]; // Языки, которые мы поддерживаем
  const paths = successStories.flatMap(({ slug }) =>
    locales.map((locale) => ({ params: { slug }, locale })),
  );
  return { paths, fallback: false }; // указываем fallback false, чтобы не рендерить недоступные страницы
}

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "success-stories",
      ])),
      locale,
      params,
    },
  };
}

export default SuccessStoriesPage;
