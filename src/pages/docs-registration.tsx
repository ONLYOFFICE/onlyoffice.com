import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from "next";
import { parse } from "cookie";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Footer } from "@src/components/modules/Footer";
import {
  DocsRegistrationTemplate,
  IDocsRegistrationTemplate,
} from "@src/components/templates/DocsRegistration";

const DocsRegistrationPage = ({
  locale,
  queryParams,
}: ILocale & IDocsRegistrationTemplate) => {
  const { t } = useTranslation("docs-registration");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Main>
        <DocsRegistrationTemplate
          queryParams={queryParams}
        />
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
  req,
}: GetServerSidePropsContext & ILocale) {
  const {
    language,
    spam,
    partnerId,
    affiliateId,
  } = query;

  const cookies = parse(req.headers.cookie || "");
  const utmCampaign = cookies.utm_campaign || null;

  const queryString = new URLSearchParams();
  if (language) queryString.append("language", String(language));
  if (spam) queryString.append("spam", String(spam));
  if (partnerId) queryString.append("partnerId", String(partnerId));
  if (affiliateId) queryString.append("affiliateId", String(affiliateId));
  if (utmCampaign) queryString.append("campaign", String(utmCampaign));
  const queryParams = queryString.toString();

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docs-registration",
        "Select",
      ])),
      locale,
      queryParams,
    },
  };
}

export default DocsRegistrationPage;
