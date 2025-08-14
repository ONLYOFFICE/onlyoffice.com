import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from "next";
import { parse } from "cookie";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import { Footer } from "@src/components/modules/Footer";
import {
  DocSpaceRegistrationTemplate,
  IDocSpaceRegistrationTemplate,
} from "@src/components/templates/DocSpaceRegistration";
import { validateKeys } from "@src/lib/requests/thirdparty/validate";
import { findByEmail } from "@src/lib/requests/thirdparty/findByEmail";

const DocSpaceRegistrationPage = ({
  locale,
  tenants,
  queryParams,
  desktop,
}: ILocale & IDocSpaceRegistrationTemplate) => {
  const { t } = useTranslation("docspace-registration");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} description={t("PageDescription")} />
      </Layout.Head>
      <Layout.Main>
        <DocSpaceRegistrationTemplate
          tenants={tenants}
          queryParams={queryParams}
        />
      </Layout.Main>
      {!desktop && (
        <Layout.Footer>
          <Footer locale={locale} />
        </Layout.Footer>
      )}
    </Layout>
  );
};

export async function getServerSideProps({
  locale,
  query,
  req,
}: GetServerSidePropsContext & ILocale) {
  const {
    epkey,
    eskey,
    language,
    awsRegion,
    spam,
    partnerId,
    affiliateId,
    desktop,
  } = query;

  const cookies = parse(req.headers.cookie || "");
  const utmCampaign = cookies.utm_campaign || null;

  const queryString = new URLSearchParams();
  if (desktop) queryString.append("desktop", String(desktop));
  if (epkey) queryString.append("epkey", String(epkey));
  if (eskey) queryString.append("eskey", String(eskey));
  if (language) queryString.append("language", String(language));
  if (awsRegion) queryString.append("awsRegion", String(awsRegion));
  if (spam) queryString.append("spam", String(spam));
  if (partnerId) queryString.append("partnerId", String(partnerId));
  if (affiliateId) queryString.append("affiliateId", String(affiliateId));
  if (utmCampaign) queryString.append("campaign", String(utmCampaign));
  const queryParams = queryString.toString();

  let tenants = null;

  if (epkey && eskey) {
    const validateKeysData = await validateKeys({
      epkey: epkey.slice(0, -1),
      eskey,
      page: `reg_page_${eskey}`,
    });

    if (!validateKeysData.data?.valid) {
      return {
        redirect: {
          destination: "/docspace-registration-proxy?errorCode=3",
          permanent: false,
        },
      };
    }

    if (!validateKeysData.data.email) {
      return {
        redirect: {
          destination: "/docspace-registration-proxy?errorCode=1",
          permanent: false,
        },
      };
    }

    try {
      tenants = await findByEmail({ email: validateKeysData.data.email });

      if (tenants.data.length === 0) {
        return {
          redirect: {
            destination: `/docspace-registration-proxy?${queryParams}`,
            permanent: false,
          },
        };
      }
    } catch {
      return {
        redirect: {
          destination: "/docspace-registration-proxy?errorCode=2",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docspace-registration",
        "Select",
      ])),
      locale,
      tenants,
      queryParams,
      desktop: desktop ? true : false,
    },
  };
}

export default DocSpaceRegistrationPage;
