import { Hero } from "./sections/Hero";
import { Connectors } from "./sections/Connectors";
import { Features } from "./sections/Features";
import { LeftTextImg } from "./sections/LeftTextImg";
import { Questions } from "./sections/Questions";

const ForDevelopersTemplate = () => {
  return (
    <>
      <Hero />
      <Connectors />
      <Features />
      <LeftTextImg />
      <Questions />
    </>
  );
};

export { ForDevelopersTemplate };
