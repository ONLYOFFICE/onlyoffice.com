import { Hero } from "./sections/Hero";
import { Connectors } from "./sections/Connectors";
import { Reasons } from "./sections/Reasons";
import { UsefulInfo } from "./sections/UsefulInfo";
import { LeftTextImg } from "./sections/LeftTextImg";
import { Questions } from "./sections/Questions";

const ForDevelopersTemplate = () => {
  return (
    <>
      <Hero />
      <Connectors />
      <Reasons />
      <UsefulInfo />
      <LeftTextImg />
      <Questions />
    </>
  );
};

export { ForDevelopersTemplate };
