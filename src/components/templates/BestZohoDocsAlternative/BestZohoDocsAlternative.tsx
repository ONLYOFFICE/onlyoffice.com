import { StyledBestZohoDocsAlternativeTemplate } from "./BestZohoDocsAlternative.styled";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { Compatibility } from "./sections/Compatibility";
import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestZohoDocsAlternativeTemplate = () => {
  return (
    <StyledBestZohoDocsAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <Compatibility />
      <BestAlternativeCompare alternative="Zoho Docs" />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF" />
    </StyledBestZohoDocsAlternativeTemplate>
  );
};

export { BestZohoDocsAlternativeTemplate };
