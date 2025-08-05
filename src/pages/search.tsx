import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  SearchTemplate,
  ISearchTemplate,
} from "@src/components/templates/Search";
import { Footer } from "@src/components/modules/Footer";

const SearchPage = ({
  locale,
  searchList,
  searchQuery,
}: ILocale & ISearchTemplate) => {
  const { t } = useTranslation("search");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t("PageTitle")}
          description={t("PageDescription")}
          descriptionOG={t("PageDescriptionOG")}
        />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <SearchTemplate searchList={searchList} searchQuery={searchQuery} />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getServerSideProps({
  locale,
  query,
}: {
  locale: ILocale["locale"];
  query: { search: string };
}) {
  const searchQuery = query.search;
  let searchList: ISearchTemplate["searchList"] = [];

  try {
    const searchRes = await fetch(
      `${process.env.GOOGLE_SEARCH_URL}?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.GOOGLE_SEARCH_CX}&q=${encodeURIComponent(searchQuery)}`,
    );

    const searchData = await searchRes.json();

    searchList =
      searchData.items?.map(
        (item: { title: string; link: string; snippet: string }) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
        }),
      ) || [];
  } catch (error) {
    console.error("Search API failed:", error);
    searchList = [];
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "search"])),
      locale,
      searchList,
      searchQuery,
    },
  };
}

export default SearchPage;
