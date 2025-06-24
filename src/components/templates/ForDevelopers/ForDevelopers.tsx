import { Hero } from "./sections/Hero";
import { Connectors } from "./sections/Connectors";
import { Features } from "./sections/Features";
import { LeftTextImg } from "./sections/LeftTextImg";
import { Questions } from "./sections/Questions";
import { Blog } from "./sections/Blog";

const ForDevelopersTemplate = () => {
  return (
    <>
      <Hero />
      <Connectors />
      <Features />
      <LeftTextImg />
      <Questions />
      <Blog />
    </>
  );
};

export { ForDevelopersTemplate };
