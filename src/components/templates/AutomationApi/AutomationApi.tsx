import { Hero } from "./sections/Hero";
import { WhatIs } from "./sections/WhatIs";
import { Demo } from "./sections/Demo";
import { Carousel } from "./sections/Carousel";
import { LeftTextImg } from "./sections/LeftTextImg";
import { Questions } from "./sections/Questions";

const AutomationApiTemplate = () => {
  return (
    <>
      <Hero />
      <WhatIs />
      <Demo />
      <Carousel />
      <LeftTextImg />
      <Questions />
    </>
  );
};

export { AutomationApiTemplate };
