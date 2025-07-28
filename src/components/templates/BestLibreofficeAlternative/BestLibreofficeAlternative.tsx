import { BestAlternativeGetStarted } from "@src/components/modules/best-alternative/BestAlternativeGetStarted";
import { StyledLibreofficeAlternativeTemplate } from "./BestLibreofficeAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";
import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";

const BestLibreofficeAlternativeTemplate = () => {
  return (
    <StyledLibreofficeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      <Compatibility />
      <BestAlternativeCompare alternative="LibreOffice/OpenOffice" />
      <BestAlternativeGetStarted />
    </StyledLibreofficeAlternativeTemplate>
  );
};

export { BestLibreofficeAlternativeTemplate };
