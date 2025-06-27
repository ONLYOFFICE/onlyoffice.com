import { Hero } from "./sections/Hero";
import { Switcher } from "./sections/Switcher";
import { Cards } from "./sections/Cards";
import { Worth } from "./sections/Worth";

import { StyledDocSpaceDeveloperColorWrapper } from "./DocSpaceDeveloper.styled";

const DocSpaceDeveloperTemplate = () => {
  return (
    <>
      <StyledDocSpaceDeveloperColorWrapper>
        <Hero />
        <Switcher />
        <Cards />
      </StyledDocSpaceDeveloperColorWrapper>
      <Worth />
    </>
  );
};

export { DocSpaceDeveloperTemplate };