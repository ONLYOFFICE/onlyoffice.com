import { StyledBestGoogleDocsAlternativeTemplate } from "./BestGoogleDocsAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";
import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestGoogleDocsAlternativeTemplate = () => {
  return (
    <StyledBestGoogleDocsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      <Compatibility />
      <BestAlternativeCompare alternative="Google Docs" />
      <GetStarted />
    </StyledBestGoogleDocsAlternativeTemplate>
  );
};

export { BestGoogleDocsAlternativeTemplate };
