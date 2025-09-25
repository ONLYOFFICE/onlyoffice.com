import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  UnsubscribeTemplate,
  IUnsubscribeTemplate,
} from "@src/components/templates/Unsubscribe";
import { Footer } from "@src/components/modules/Footer";
import { subscription } from "@src/lib/requests/subscription";
import { validateUnsubscribeId } from "@src/lib/requests/thirdparty";

const UnsubscribePage = ({ locale, email }: ILocale & IUnsubscribeTemplate) => {
  const { t } = useTranslation("unsubscribe");

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
        <UnsubscribeTemplate email={email} />
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
  query: {
    id?: string;
    UnsubscribePage_testing?: string;
  };
}) {
  let email: string | null = null;

  if (query.id) {
    try {
      const validateUnsubscribeData = await validateUnsubscribeId({
        UnsubscribeId: query.id,
      });

      if (validateUnsubscribeData.status !== 200) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }

      const emailValue = validateUnsubscribeData.data?.email;

      if (typeof emailValue === "string") {
        try {
          const parsed = JSON.parse(emailValue);
          email = parsed?.email || null;
        } catch {
          email = emailValue;
        }
      }
    } catch {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  if (!email && query.UnsubscribePage_testing !== "4UPtesting") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (email) {
    try {
      await subscription({
        id: query.id || "",
        subscribe: false,
        newsOnly: false,
      });
    } catch {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "unsubscribe"])),
      locale,
      email: email || "",
    },
  };
}

export default UnsubscribePage;
