import { StyledContributeTemplate } from "./Contribute.styled";
import { Hero } from "./sections/Hero";
import { Improve } from "./sections/Improve";
import { Spread } from "./sections/Spread";
import { Features } from "./sections/Features";

const ContributeTemplate = () => {
  return (
    <StyledContributeTemplate>
      <Hero />
      <Improve />
      <Spread />
      <Features />
    </StyledContributeTemplate>
  );
};

export { ContributeTemplate };
