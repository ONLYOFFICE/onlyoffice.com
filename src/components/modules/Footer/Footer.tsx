import { useRouter } from "next/router";
import { FooterMenu } from "onlyoffice-react-ui-kit/footer-menu";
import "onlyoffice-react-ui-kit/footer-menu/css";

interface IFooter {
  locale?: string;
}

const Footer = ({ locale }: IFooter) => {
  const router = useRouter();

  return <FooterMenu locale={locale ?? router.locale} />;
};

export { Footer };
