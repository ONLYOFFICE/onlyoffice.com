import { Hero } from "./sections/Hero";
import { StyledBestAdobeAlternativeTemplate } from "./BestAdobeAlternative.styled";
import { Editors } from "./sections/Editors";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { LearnMore } from "./sections/LearnMore";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestAdobeAlternativeTemplate = () => {
  return (
    <StyledBestAdobeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />      
      <LearnMore />
      <Editors />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF" />
    </StyledBestAdobeAlternativeTemplate>
  );
};

export { BestAdobeAlternativeTemplate };
