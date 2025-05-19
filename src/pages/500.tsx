import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@src/types/locale";
import { ErrorHead } from "@src/components/modules/head/ErrorHead";
import { ErrorTemplate } from "@src/components/templates/Error";

const Error500Page = () => {
  return (
    <>
      <ErrorHead title="ONLYOFFICE is on maintenance" />
      <ErrorTemplate
        heading="500 Error!"
        description={
          <>
            Sorry, ONLYOFFICE is on maintenance.
            <br />
            It may take a few minutes.
          </>
        }
      />
    </>
  );
};

export async function getStaticProps({ locale }: ILocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "error"])),
    },
  };
}

export default Error500Page;
