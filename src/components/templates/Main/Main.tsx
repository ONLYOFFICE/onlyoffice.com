import { ILocale } from "@src/types/locale";
import { GlobalStyle } from "./Main.styled";
import { Hero } from "./sections/Hero";
import { Docs } from "./sections/Docs";
import { Collaboration } from "./sections/Collaboration";
import { AIAssistants } from "./sections/AIAssistants";
import { SecurityFirst } from "@src/components/modules/SecurityFirst";
import { GetStarted } from "@src/components/modules/GetStarted";
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
      <AIAssistants />
      <SecurityFirst />
      <GetStarted background="linear-gradient(180deg, #f8f9f9 43.75%, rgba(248, 249, 249, 0) 100%), #ffffff" />
      <Customers />
      <Rating />
      <LatestNews locale={locale} />
      <Faq />
    </>
  );
};

export { MainTemplate };
