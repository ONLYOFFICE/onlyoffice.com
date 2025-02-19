import { ILocale } from "@src/types/locale";
import { GlobalStyle } from "./Main.styled";
import { Hero } from "./sections/Hero";
import { Docs } from "./sections/Docs";
import { Collaboration } from "./sections/Collaboration";
import { SecurityFirst } from "@src/components/modules/SecurityFirst";
import { GetStarted } from "./sections/GetStarted";
import { Customers } from "./sections/Customers";
import { Rating } from "./sections/Rating";
import { LatestNews } from "./sections/LatestNews";
import { Faq } from "./sections/Faq";

const MainTemplate = ({ locale }: ILocale) => {
  return (
    <>
      <GlobalStyle />
      <Hero locale={locale} />
      <Docs />
      <Collaboration />
      <SecurityFirst />
      <GetStarted />
      <Customers locale={locale} />
      <Rating />
      <LatestNews locale={locale} />
      <Faq />
    </>
  );
};

export { MainTemplate };
