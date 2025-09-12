import { EnterpriseSolution } from "./sections/EnterpriseSolution";
import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { FlexibleChoice } from "./sections/FlexibleChoice";
import { FeaturesParagraphsList } from "./sections/FeaturesParagraphsList";

const HealthcareTemplate = () => {
  return (
    <>
      <Hero />
      <Partners />
      <FlexibleChoice />
      <FeaturesParagraphsList />
      <EnterpriseSolution />
    </>
  );
};

export { HealthcareTemplate };
