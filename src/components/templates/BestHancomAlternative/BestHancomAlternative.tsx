import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { StyledBestHancomAlternativeTemplate } from "./BestHancomAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";

const BestHancomAlternativeTemplate = () => {
  return (
    <StyledBestHancomAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="Hancom Office" />
    </StyledBestHancomAlternativeTemplate>
  );
};

export { BestHancomAlternativeTemplate };
