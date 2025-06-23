import { useRouter } from "next/router";
import { OOFooter } from "onlyoffice-react-ui-kit/footer";
import "onlyoffice-react-ui-kit/footer/css";
import { ILocale } from "@src/types/locale";
import { languages } from "@src/config/data/languages";

const Footer = ({ locale }: ILocale) => {
  const router = useRouter();

  return (
    <OOFooter
      locale={locale}
      languages={languages.map((language) => ({
        key: language.shortKey,
        shortKey: language.shortKey,
        name: language.name,
        href: router.asPath
      }))}
    />
  );
};

export { Footer };
