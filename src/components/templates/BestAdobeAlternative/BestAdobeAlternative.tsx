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
      <GetStarted />
    </StyledBestAdobeAlternativeTemplate>
  );
};

export { BestAdobeAlternativeTemplate };
