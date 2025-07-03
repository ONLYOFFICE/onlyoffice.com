import { Hero } from "./sections/Hero";
import { Users } from "./sections/Users";
import { Features } from "./sections/Features";
import { FeaturesIcons } from "./sections/FeaturesIcons";
import { Reasons } from "./sections/Reasons";
import { Apps } from "./sections/Apps";
import { FeaturesTools } from "./sections/FeaturesTools";
import { Enterprise } from "./sections/Enterprise";
import { SuccessStories } from "./sections/SuccessStories";
import { Questions } from "./sections/Questions";

const ForResearchTemplate = () => {
  return (
    <>
      <Hero />
      <Users />
      <Features />
      <FeaturesIcons />
      <Reasons />
      <Apps />
      <FeaturesTools />
      <Enterprise />
      <SuccessStories />
      <Questions />
    </>
  );
};

export { ForResearchTemplate };
