import { Hero } from "./sections/Hero";
import { Upcoming } from "./sections/Upcoming";
import { Watch } from "./sections/Watch";
import { IWebinars } from "./Webinars.types";

const WebinarsTemplate = ({ webinars }: IWebinars) => {
  return (
    <>
      <Hero />
      <Upcoming webinars={webinars} />
      <Watch webinars={webinars} />
    </>
  );
};

export { WebinarsTemplate };