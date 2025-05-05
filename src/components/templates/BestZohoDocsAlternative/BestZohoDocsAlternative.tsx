import { StyledBestZohoDocsAlternativeTemplate } from "./BestZohoDocsAlternative.styled";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { Compatibility } from "./sections/Compatibility";
import { BestAlternativeGetStarted } from "@src/components/modules/best-alternative/BestAlternativeGetStarted";
import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";

const BestZohoDocsAlternativeTemplate = () => {
  return (
    <StyledBestZohoDocsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="Zoho Docs" />
      <BestAlternativeGetStarted />
    </StyledBestZohoDocsAlternativeTemplate>
  );
};

export { BestZohoDocsAlternativeTemplate };
