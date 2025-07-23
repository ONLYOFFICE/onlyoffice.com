import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { StyledBestMicrosoftOfficeAlternativeTemplate } from "./BestMicrosoftOfficeAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";
import { BestAlternativeGetStarted } from "@src/components/modules/best-alternative/BestAlternativeGetStarted";

const BestMicrosoftOfficeAlternativeTemplate = () => {
  return (
    <StyledBestMicrosoftOfficeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="MS Word Online" />
      <BestAlternativeGetStarted />
    </StyledBestMicrosoftOfficeAlternativeTemplate>
  );
};

export { BestMicrosoftOfficeAlternativeTemplate };
