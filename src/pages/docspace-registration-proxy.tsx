import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from "next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { Head } from "@src/components/modules/head/Head";
import {
  DocSpaceRegistrationProxyTemplate,
  IDocSpaceRegistrationProxyTemplate,
} from "@src/components/templates/DocSpaceRegistrationProxy";
import { validateKeys } from "@src/lib/requests/thirdparty/validate";
import { register } from "@src/lib/requests/thirdparty/register";

const DocSpaceRegistrationProxyPage = ({
  errorMessage,
}: IDocSpaceRegistrationProxyTemplate) => {
  const { t } = useTranslation("docspace-registration-proxy");

  return (
    <Layout>
      <Layout.Head>
        <Head title={t("PageTitle")} />
      </Layout.Head>
      <Layout.Main>
        <DocSpaceRegistrationProxyTemplate errorMessage={errorMessage} />
      </Layout.Main>
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
    campaign,
    transport,
  } = query;

  let errorMessage = "";

  if (!epkey || !eskey) {
    errorMessage = "Invalid parameters";
  } else {
    const validateKeysData = await validateKeys({
      epkey,
      eskey,
      page: `reg_proxy_page_${eskey}`,
    });

    if (!validateKeysData.data?.valid) {
      errorMessage = "Invalid, expired or already used link";
    } else if (validateKeysData.data?.email) {
      const registerData = await register({
        email: validateKeysData.data.email,
        thirdPartyProfile: transport,
        language: language || "",
        awsRegion: awsRegion || "",
        spam,
        partnerId: partnerId || "",
        affiliateId: affiliateId || "",
        campaign: campaign || "",
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      });

      if (registerData.data.reference) {
        return {
          redirect: {
            destination: registerData.data.reference + "&wizard=true",
            permanent: false,
          },
        };
      }
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "docspace-registration-proxy",
      ])),
      errorMessage,
    },
  };
}

export default DocSpaceRegistrationProxyPage;
