import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { GetServerSideProps } from "next";

const CodePage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const {
      code,
      error: err,
      desktop,
      p,
    } = router.query as Record<string, string | undefined>;

    if (code) {
      try {
        (window.opener ?? window).localStorage.setItem("code", code);
      } catch (e) {
        console.error(e);
      }

      if (desktop && p) {
        router.replace(`/login?p=${p}&code=${code}&desktop=true`);
      }
    } else if (err) {
      setError(err);
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <title>Third party</title>

        <style>{`
          #third-party-body {
            cursor: default;
            height: 100%;
            width: 100%;
            min-height: 100%;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 36px 36px 0 36px;
            border: 0;
            box-sizing: border-box;
            font-family: "Open Sans", sans-serif;
          }
          #container {
            position: relative;
            margin: 12px 0 60px 0;
          }
          .text {
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            margin: auto;
            max-width: 560px;
            padding: 0;
          }
          img {
            display: block;
            width: 100%;
          }
        `}</style>
      </Head>

      <div id="third-party-body">
        {error && (
          <div id="container">
            <img src="/static/images/clouds.png" alt="error" />
            <p className="text">{error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.code) return { notFound: true };
  return { props: {} };
};

export default CodePage;
