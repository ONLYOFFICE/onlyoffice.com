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
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF" />
    </StyledBestWpsAlternativeTemplate>
  );
};

export { BestWpsAlternativeTemplate };
