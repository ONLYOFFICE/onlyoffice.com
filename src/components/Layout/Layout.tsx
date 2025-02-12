import { ILayout } from "./Layout.types";
import { Head } from "./Head";
import { AdventAnnounce } from "./AdventAnnounce";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const Layout = ({
  children,
  head,
  adventAnnounce,
  header,
  main,
  footer,
}: ILayout) => {
  return (
    <div className="layout">
      {children}
      {head && <Head>{head}</Head>}
      {adventAnnounce && <AdventAnnounce>{adventAnnounce}</AdventAnnounce>}
      {header && <Header>{header}</Header>}
      {main && <Main>{main}</Main>}
      {footer && <Footer>{footer}</Footer>}
    </div>
  );
};

Layout.Header = Header;
Layout.AdventAnnounce = AdventAnnounce;
Layout.Footer = Footer;
Layout.Main = Main;
Layout.Head = Head;

export { Layout };
