import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import { SubscribeTemplate } from "@src/components/templates/Subscribe";
import { Footer } from "@src/components/modules/Footer";
import { db } from "@src/config/db/site";
import { subscribeChecking } from "@src/utils/subscription/subscribeChecking";
import { validateUnsubscribeId } from "@src/lib/requests/thirdparty/validateUnsubscribeId";

const SubscribePage = ({ locale }: ILocale) => {
  const { t } = useTranslation("subscribe");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <SubscribeTemplate />
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
  query: { id: string; SubscribePage_testing: string };
}) {
  const validateUnsubscribeIdData = await validateUnsubscribeId({
    id: query.id,
  });

  let parsedData;
  try {
    parsedData = JSON.parse(validateUnsubscribeIdData.data?.email || "{}");
  } catch {
    parsedData = {};
  }

  const { email, firstname, type } = parsedData;

  if (!email && query.SubscribePage_testing !== "4SPtesting") {
    return {
      redirect: { destination: "/contacts", permanent: false },
    };
  }

  if (email) {
    try {
      subscribeChecking(db.core, email, firstname, type);
    } catch {
      return {
        redirect: { destination: "/", permanent: false },
      };
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "subscribe"])),
      locale,
    },
  };
}

export default SubscribePage;
