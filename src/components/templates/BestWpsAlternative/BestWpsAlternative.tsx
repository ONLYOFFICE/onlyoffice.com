import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { StyledBestWpsAlternativeTemplate } from "./BestWpsAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestWpsAlternativeTemplate = () => {
  return (
    <StyledBestWpsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="WPS Office" />
      <GetStarted />
    </StyledBestWpsAlternativeTemplate>
  );
};

export { BestWpsAlternativeTemplate };
