import { StyledLibreofficeAlternativeTemplate } from "./BestLibreofficeAlternative.styled";
import { Compatibility } from "./sections/Compatibility";
import { Hero } from "./sections/Hero";
import { LearnMore } from "./sections/LearnMore";
import { Presentation } from "./sections/Presentation";
import { Reasons } from "./sections/Reasons";
import { BestAlternativeCompare } from "@src/components/modules/best-alternative/BestAlternativeCompare";
import { GetStarted } from "@src/components/modules/GetStarted";

const BestLibreofficeAlternativeTemplate = () => {
  return (
    <StyledLibreofficeAlternativeTemplate>
      <Hero />
      <Reasons />
      <Presentation />
      <LearnMore />
      <Compatibility />
      <BestAlternativeCompare alternative="LibreOffice/OpenOffice" />
      <GetStarted background="linear-gradient(180deg, #F8F9F9 43.75%, rgba(248, 249, 249, 0) 100%), #FFFFFF" />
    </StyledLibreofficeAlternativeTemplate>
  );
};

export { BestLibreofficeAlternativeTemplate };
