import { useRouter } from "next/router";
import { OOHeader } from "onlyoffice-react-ui-kit/header";
import "onlyoffice-react-ui-kit/header/css";
import { IHeader } from "./Header.types";
import { languages } from "@src/config/data/languages";
import { useHeaderStore } from "@src/store/useHeaderStore";

const Header = ({ locale, theme, highlight }: IHeader) => {
  const router = useRouter();
  const scrolled = useHeaderStore((state) => state.scrolled);

  return (
    <OOHeader
      locale={locale}
      languageSelector={{
        languages: languages,
        href: router.asPath,
      }}
      search={{
        show: true,
        onSubmit: () => {},
        onChange: () => {},
        value: "",
        variant: "main",
      }}
      hasPhone={true}
      theme={theme === "white" ? (scrolled ? undefined : "white") : undefined}
      highlight={{
        buttonId: highlight?.buttonId,
        linkId: highlight?.linkId,
      }}
    />
  );
};

export { Header };
