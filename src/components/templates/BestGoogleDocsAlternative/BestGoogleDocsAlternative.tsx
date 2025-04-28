import { StyledBestGoogleDocsAlternativeTemplate } from "./BestGoogleDocsAlternative.styled";
import { Compare } from "./sections/Compare";
import { Compatibility } from "./sections/Compatibility";
import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";

const BestGoogleDocsAlternativeTemplate = () => {
  return (
    <StyledBestGoogleDocsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      <Compatibility />
      <Compare />
      <GetStarted />
    </StyledBestGoogleDocsAlternativeTemplate>
  );
};

export { BestGoogleDocsAlternativeTemplate };
