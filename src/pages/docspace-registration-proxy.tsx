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
    desktop,
    store,
  } = query;
  let reference = "";
  let errorMessage = "";

  const ip =
    req.headers["x-forwarded-for"]?.toString() ||
    req.socket.remoteAddress ||
    null;

  function getGAClientId(): string {
    const cookieHeader = req.headers.cookie || "";
    const gaMatch = cookieHeader.match(/_ga=([^;]+)/);
    if (!gaMatch) return "";

    let _ga = gaMatch[1];
    if (_ga) {
      const parts = _ga.split(".");
      if (parts.length >= 2) {
        _ga = `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
      }
    }

    return _ga;
  }

  function getDesktopStore(isDesktop: boolean): string {
    if (!isDesktop) return "";
    return typeof store === "string" ? store : "";
  }

  async function sendGA(ownerId: string, isDesktop: boolean, store?: string) {
    const isTestSite = process.env.TESTING_ON === "true";
    let eventName: string;

    if (isDesktop) {
      if (store) store = `_${store}`;
      eventName = isTestSite
        ? `Test_GA_Desktop${store || ""}`
        : `Portal_Created_Desktop${store || ""}`;
    } else {
      eventName = isTestSite ? "Test_GA" : "DocSpace_Portal_Created";
    }

    await sendReqToGA(eventName, ownerId);
  }

  async function sendReqToGA(eventName: string, ownerId: string) {
    const url = process.env.GOOGLE_ANALYTICS_URL;
    if (!url) return;

    const requestBody = {
      client_id: getGAClientId(),
      non_personalized_ads: false,
      events: [
        {
          name: eventName,
          params: { ownerId },
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`GA request failed: ${response.statusText}`);
    }

    return response.text();
  }

  if (epkey && eskey) {
    const validateKeysData = await validateKeys({
      epkey,
      eskey,
      page: `reg_page_${eskey}`,
    });

    if (!validateKeysData.data.valid) {
      errorMessage = "Invalid, expired or already used link";
    }

    if (validateKeysData.data.email) {
      const registerData = await register({
        email: validateKeysData.data.email,
        thirdPartyProfile: transport,
        language: language || "",
        awsRegion: awsRegion || "",
        spam,
        partnerId: partnerId || "",
        affiliateId: affiliateId || "",
        campaign: campaign || "",
        ip,
      });

      if (registerData.data.reference) {
        reference = registerData.data.reference + "&wizard=true";

        if (registerData.data.tenant) {
          const isDesktop = desktop === "true";
          const desktopStore = getDesktopStore(isDesktop);

          await sendGA(
            registerData.data.tenant.ownerId,
            isDesktop,
            desktopStore,
          );
        }
      }

      if (reference) {
        return {
          redirect: {
            destination: registerData.data.reference,
            permanent: false,
          },
        };
      }
    }
  } else {
    errorMessage = "Invalid parameters";
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
