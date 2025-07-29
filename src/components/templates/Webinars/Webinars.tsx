import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";
import { Upcoming } from "./sections/Upcoming";
import { Watch } from "./sections/Watch";
import { Contribute } from "./sections/Contribute";
import { IWebinars } from "./Webinars.types";

const WebinarsTemplate = ({ webinars, locale }: ILocale & IWebinars) => {
  return (
    <>
      <Hero />
      <Upcoming webinars={webinars} locale={locale} />
      <Watch webinars={webinars} locale={locale} />
      <Contribute />
    </>
  );
};

export { WebinarsTemplate };