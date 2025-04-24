import { Hero } from "./sections/Hero";
import { StyledBestAdobeAlternativeTemplate } from "./BestAdobeAlternative.styled";
// import OnlyOfficeEditor from "./sections/Editors/OnlyofficeEditor";
import { Reasons } from "./sections/Reasons";
import { Presentation } from "./sections/Presentation";
import { LearnMore } from "./sections/LearnMore";
import { GetStarted } from "./sections/GetStarted";

const BestAdobeAlternativeTemplate = () => {
  return (
    <StyledBestAdobeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      {/* <OnlyOfficeEditor /> */}
      <GetStarted />
    </StyledBestAdobeAlternativeTemplate>
  );
};

export { BestAdobeAlternativeTemplate };
