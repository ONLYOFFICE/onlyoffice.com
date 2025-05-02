import Head from "next/head";
import { IMaintenanceHead } from "./MaintenanceHead.types";

const MaintenanceHead = ({ title }: IMaintenanceHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" />
      <link
        rel="icon"
        sizes="96x96"
        href="/images/favicons/favicon.ico"
        type="image/x-icon"
      />
    </Head>
  );
};

export { MaintenanceHead };
