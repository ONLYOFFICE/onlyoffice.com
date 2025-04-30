import { StyledLibreofficeAlternativeTemplate } from "./BestLibreofficeAlternative.styled";
import { Compare } from "./sections/Compare";
import { Compatibility } from "./sections/Compatibility";
import { GetStarted } from "./sections/GetStarted";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";

const BestLibreofficeAlternativeTemplate = () => {
  return (
    <StyledLibreofficeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      <Compatibility />
      <Compare />
      <GetStarted />
    </StyledLibreofficeAlternativeTemplate>
  );
};

export { BestLibreofficeAlternativeTemplate };
