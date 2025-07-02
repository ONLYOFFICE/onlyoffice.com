import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { StyledBestWpsAlternativeTemplate } from "./BestWpsAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { BestAlternativeGetStarted } from "@src/components/modules/best-alternative/BestAlternativeGetStarted";
import { Presentation } from "./sections/Presentation";

const BestWpsAlternativeTemplate = () => {
  return (
    <StyledBestWpsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="WPS Office" />
      <BestAlternativeGetStarted />
    </StyledBestWpsAlternativeTemplate>
  );
};

export { BestWpsAlternativeTemplate };
