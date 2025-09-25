import Script from "next/script";
import { ILayout } from "./Layout.types";
import { Head } from "./Head";
import { AdventAnnounce } from "./AdventAnnounce";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { CookieBanner } from "@src/components/modules/cookie/CookieBanner";

const Layout = ({
  children,
  head,
  adventAnnounce,
  header,
  main,
  footer,
}: ILayout) => {
  return (
    <>
      <div className="layout">
        {children}
        {head && <Head>{head}</Head>}
        {adventAnnounce && <AdventAnnounce>{adventAnnounce}</AdventAnnounce>}
        {header && <Header>{header}</Header>}
        {main && <Main>{main}</Main>}
        {footer && <Footer>{footer}</Footer>}
        <CookieBanner />
      </div>

      <Script id="zendesks-settings">
        {`
          window.zESettings = {
            webWidget: {
              chat: {
                departments: {
                  enabled: []
                }
              },
              color: {
                theme: "#FF6F3D",
                launcher: "#FF6F3D",
                launcherText: "#FFFFFF",
                button: "#FF6F3D",
                resultLists: "#691840",
                header: "#4B6894",
                articleLinks: "#FF6F3D"
              }
            }
          };
        `}
      </Script>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=d9e277ac-20cf-47a7-8010-57cd31a8d619"
      />
    </>
  );
};

Layout.Header = Header;
Layout.AdventAnnounce = AdventAnnounce;
Layout.Footer = Footer;
Layout.Main = Main;
Layout.Head = Head;

export { Layout };
