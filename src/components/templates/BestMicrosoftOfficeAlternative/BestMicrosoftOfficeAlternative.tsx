import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { StyledBestMicrosoftOfficeAlternativeTemplate } from "./BestMicrosoftOfficeAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestMicrosoftOfficeAlternativeTemplate = () => {
  return (
    <StyledBestMicrosoftOfficeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="MS Word Online" />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF" />
    </StyledBestMicrosoftOfficeAlternativeTemplate>
  );
};

export { BestMicrosoftOfficeAlternativeTemplate };
