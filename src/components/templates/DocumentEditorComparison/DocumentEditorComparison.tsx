import { Hero } from "./sections/Hero";
import { Comparison } from "./sections/Comparison/Comparison";
import { Compatibility } from "./sections/Compatibility";
import { Compare } from "./sections/Compare";
import { GetStarted } from "@src/components/modules/GetStarted";

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
