import NextHead from "next/head";
import { useRouter } from "next/router";
import { IHead } from "./Head.types";

const Head = ({ title, description, titleOG, descriptionOG }: IHead) => {
  const { locales, locale, pathname } = useRouter();
  const pathnameString = pathname === "/" ? "" : pathname;

  return (
    <NextHead>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={titleOG || title} />
      {(descriptionOG || description) && (
        <meta
          property="og:description"
          content={descriptionOG || description}
        />
      )}
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${
          locale === "en" ? "" : `/${locale}`
        }${pathnameString}`}
      />
      <meta
        property="og:image"
        content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg"
      />
      <meta property="og:type" content="website" />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}${
          locale === "en" ? "" : `/${locale}`
        }${pathnameString}`}
      />
      <link
        href={`${process.env.NEXT_PUBLIC_SITE_URL}${pathnameString}`}
        hrefLang="x-default"
      />
      {locales?.map((locale, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={locale}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}${
            locale === "en" ? "" : `/${locale}`
          }${pathnameString}`}
        />
      ))}
      <link
        rel="shortcut icon"
        sizes="16x16"
        href="/images/favicons/favicon16.png"
        type="image/png"
      />
      <link
        rel="shortcut icon"
        sizes="32x32"
        href="/images/favicons/favicon32.png"
        type="image/png"
      />
      <link
        rel="shortcut icon"
        sizes="64x64"
        href="/images/favicons/favicon64.png"
        type="image/png"
      />
      <link
        rel="icon"
        sizes="96x96"
        href="/images/favicons/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="150x150"
        href="/images/favicons/favicon150.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="310x310"
        href="/images/favicons/favicon310.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="325x325"
        href="/images/favicons/favicon325.png"
        type="image/png"
      />
      <link
        rel="preload"
        href="/fonts/OpenSans/OpenSans-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/OpenSans/OpenSans-SemiBold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/OpenSans/OpenSans-Bold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    </NextHead>
  );
};

export { Head };
