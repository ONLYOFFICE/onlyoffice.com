import { StyledBestZohoDocsAlternativeTemplate } from "./BestZohoDocsAlternative.styled";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { Compatibility } from "./sections/Compatibility";
import { Compare } from "./sections/Compare";
import { GetStarted } from "./sections/GetStarted";

const BestZohoDocsAlternativeTemplate = () => {
  return (
    <StyledBestZohoDocsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <Compare />
      <GetStarted />
    </StyledBestZohoDocsAlternativeTemplate>
  );
};

export { BestZohoDocsAlternativeTemplate };
