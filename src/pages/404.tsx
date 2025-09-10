import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "@src/types/locale";
import { ErrorHead } from "@src/components/modules/head/ErrorHead";
import { ErrorTemplate } from "@src/components/templates/Error";

const Error404Page = () => {
  return (
    <>
      <ErrorHead title="ONLYOFFICE is on maintenance" />
      <ErrorTemplate
        heading="404 Error"
        description="It seems you clicked on an invalid link, or entered an address that is not on this website"
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

export default Error404Page;
