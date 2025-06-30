import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ILocale } from "@src/types/locale";
import { Layout } from "@src/components/Layout";
import { AdventAnnounce } from "@src/components/modules/AdventAnnounce";
import { Head } from "@src/components/modules/head/Head";
import { Header } from "@src/components/modules/Header";
import {
  DownloadDesktopTemplate,
  IDownloadDesktopTemplate,
} from "@src/components/templates/DownloadDesktop";
import { Footer } from "@src/components/modules/Footer";
import { getProductsDetails } from "@src/lib/requests/getProductsDetails";
import { IDownloadCard } from "@src/components/widgets/download/DownloadCard";
import { desktopProducts } from "@src/components/templates/DownloadDesktop/sections/Hero/data/desktopData";
import { mobileProducts } from "@src/components/templates/DownloadDesktop/sections/Hero/data/mobileData";

const DownloadDesktopPage = ({
  locale,
  desktopProducts,
  mobileProducts,
}: IDownloadDesktopTemplate) => {
  const { t } = useTranslation("download-desktop");

  return (
    <Layout>
      <Layout.AdventAnnounce>
        <AdventAnnounce locale={locale} />
      </Layout.AdventAnnounce>
      <Layout.Head>
        <Head
          title={t("PageTitle")}
          titleOG={t("PageTitleOG")}
          description={t("PageDescription")}
        />
      </Layout.Head>
      <Layout.Header>
        <Header locale={locale} />
      </Layout.Header>
      <Layout.Main>
        <DownloadDesktopTemplate
          locale={locale}
          desktopProducts={desktopProducts}
          mobileProducts={mobileProducts}
        />
      </Layout.Main>
      <Layout.Footer>
        <Footer locale={locale} />
      </Layout.Footer>
    </Layout>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  const productsDetails = await getProductsDetails({
    key: [
      "Desktop-Windows_online-exe-x86",
      "Desktop-Windows-exe-x64",
      "Desktop-Windows-exe-x86",
      "Desktop-Windows--x64_xp",
      "Desktop-MacOS--",
      "Desktop-MacOS_legacy--",
      "Desktop-Linux-deb-x64",
      "Desktop-Linux-rpm-x64",
      "appimage-desktopeditors",
    ],
  });
  const secondaryProductsDetails = await getProductsDetails({
    key: [
      "Desktop-Windows-msi-x64",
      "Desktop-Windows-msi-x86",
      "Desktop-Windows--x86_xp",
      "Desktop-MacOS_arm--",
    ],
  });

  const mapProducts = (products: IDownloadCard[]) =>
    products.map((item) => {
      const keys = Array.isArray(item.nameKey) ? item.nameKey : [item.nameKey];
      const db = keys[0] ? productsDetails?.[keys[0]] : undefined;
      const secondaryDb = keys[1]
        ? secondaryProductsDetails?.[keys[1]]
        : undefined;

      return {
        ...item,
        fileSize: {
          primary: db?.size || item.fileSize?.primary || "",
          secondary: secondaryDb?.size || item.fileSize?.secondary || "",
          unit: item.fileSize?.unit || "",
        },
        version: db?.version?.trim() || item.version || "",
        releaseDate: db?.lastmodified || item.releaseDate || "",
        buttons: item.buttons.map((button, index) => {
          const src = [db, secondaryDb][index];
          const href = src
            ? locale === "zh"
              ? src.url_zh || src.url
              : src.url
            : button.link?.href || "";
          return {
            ...button,
            link: button.link ? { ...button.link, href } : null,
          };
        }),
      };
    });

  const mappedDesktopData = desktopProducts.map((section) => ({
    ...section,
    items: mapProducts(section.items),
  }));

  const mappedMobileData = mobileProducts(locale).map((section) => ({
    ...section,
    items: mapProducts(section.items),
  }));

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "download-desktop",
        "DownloadCard",
      ])),
      locale,
      desktopProducts: mappedDesktopData,
      mobileProducts: mappedMobileData,
    },
  };
}

export default DownloadDesktopPage;
