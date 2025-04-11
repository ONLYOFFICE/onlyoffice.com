import { StyledContributeWrapper } from "./Contribute.styled";
import { Contacts } from "./sections/Contacts";
import { Hero } from "./sections/Hero";
import { Improve } from "./sections/Improve";
import { Spread } from "./sections/Spread";

const ContributeTemplate = () => {
  return (
    <StyledContributeWrapper>
      <Hero />
      <Improve />
      <Spread />
      <Contacts />
    </StyledContributeWrapper>
  );
};

export { ContributeTemplate };
