import { FooterMenu } from "onlyoffice-react-ui-kit/footer-menu";
import "onlyoffice-react-ui-kit/footer-menu/css";
interface IAdventAnnounceBanner {
  locale?: string;
}

const Footer = ({ locale }: IAdventAnnounceBanner) => {
  return <FooterMenu locale={locale} />;
};

export { Footer };
