import { FooterMenu } from "onlyoffice-react-ui-kit/footer-menu";
import "onlyoffice-react-ui-kit/footer-menu/css";
import { ILocale } from "@src/types/locale";

const Footer = ({ locale }: ILocale) => {
  return <FooterMenu locale={locale} />;
};

export { Footer };
