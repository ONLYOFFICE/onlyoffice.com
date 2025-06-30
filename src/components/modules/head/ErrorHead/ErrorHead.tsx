import Head from "next/head";
import { IErrorHead } from "./ErrorHead.types";

const ErrorHead = ({ title }: IErrorHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        sizes="96x96"
        href="/images/favicons/favicon.ico"
        type="image/x-icon"
      />
    </Head>
  );
};

export { ErrorHead };
