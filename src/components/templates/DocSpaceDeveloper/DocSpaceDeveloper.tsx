import { Hero } from "./sections/Hero";
import { Switcher } from "./sections/Switcher";
import { Cards } from "./sections/Cards";

import { StyledDocSpaceDeveloperColorWrapper } from "./DocSpaceDeveloper.styled";

const DocSpaceDeveloperTemplate = () => {
  return (
    <>
      <StyledDocSpaceDeveloperColorWrapper>
        <Hero />
        <Switcher />
        <Cards />
      </StyledDocSpaceDeveloperColorWrapper>
    </>
  );
};

export { DocSpaceDeveloperTemplate };