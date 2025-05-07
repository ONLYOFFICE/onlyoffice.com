import { Compare } from "./sections/Compare";
import { Comparison } from "./sections/Comparison/Comparison";
import { Compatibility } from "./sections/Compatibility";
import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";

const DocumentEditorComparisonTemplate = () => {
  return (
    <>
      <Hero />
      <Comparison />
      <Compatibility />
      <Compare />
      <GetStarted />
    </>
  );
};

export { DocumentEditorComparisonTemplate };
