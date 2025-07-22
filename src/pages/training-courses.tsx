import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { Footer } from "@src/components/modules/Footer";
import { TrainingCoursesTemplate } from "@src/components/templates/TrainingCourses";

const TrainingCoursesPage = ({ locale }: ILocale) => {
  const { t } = useTranslation("training-courses");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("TrainingCoursesPageTitle")} description={t("TrainingCoursesMetaDescription")} />
      </Layout.Head>
      <Layout.Header>
        <Header
          locale={locale}
          highlight={{
            buttonId: "oo-menu-item-btn-products",
            linkId: "oo-menu-link-docspace-training-courses",
          }}
          backgroundColor="#f5f5f5"
          borderColor="#f5f5f5"
        />
      </Layout.Header>
      <Layout.Main>
        <TrainingCoursesTemplate locale={locale} />
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
        "training-courses",
        "FaqCollapse"
      ])),
      locale,
    },
  };
}

export default TrainingCoursesPage;
