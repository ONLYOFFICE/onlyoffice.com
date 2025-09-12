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
      epkey: epkey.slice(0, -1),
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
        if (registerData.data.tenant != null)
        {
          sendGA(registerData.data.tenant.ownerId, query.desktop === "true", String(query.store), req.cookies?._ga || "");
        }

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

function sendGA(ownerId: string, isDesktop: boolean, store: string, _ga: string) {
  let eventName;
  const isTestSite = process.env.NEXT_PUBLIC_TESTING_ON === "true";

  try {
    if (isDesktop) {
      store = store ? "_" + store.trim() : "";
      eventName = isTestSite
        ? "Test_GA_Desktop" + store
        : "Portal_Created_Desktop" + store;
    } else {
      eventName = isTestSite
        ? "Test_GA"
        : "DocSpace_Portal_Created";
    }
    sendReqToGA(eventName, ownerId, _ga).catch((err) =>
      console.error("sendGA error", err)
    );

  } catch (ex) {
    console.error("docspace-registration-proxy.aspx: " + ex);
  }
}

async function sendReqToGA(key: string, ownerId: string, _ga: string) {
  const gaUrl = process.env.GOOGLE_ANALYTICS_URL || "";
  if (gaUrl == "") {
    return;
  }

  if (_ga) {
    const _gaParts = _ga.split('.');
    if (_gaParts.length >= 2) {
      _ga = _gaParts.slice(-2).join(".");
    }
  }

  const requestBody = {
    client_id: _ga,
    non_personalized_ads: false,
    events: [
      {
        name: key,
        params: {
          ownerId,
        },
      },
    ],
  };

  try {
    const res = await fetch(gaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) {
      console.error("GA request failed", await res.text());
    } else {
      console.info("GA request send successfully.");
    }
  } catch (err) {
    console.error("SendGA error", err);
  }
}

export default DocSpaceRegistrationProxyPage;
