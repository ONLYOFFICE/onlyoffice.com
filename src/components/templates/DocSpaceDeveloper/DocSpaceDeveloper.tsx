import { Hero } from "./sections/Hero";

import { StyledDocSpaceDeveloperColorWrapper } from "./DocSpaceDeveloper.styled";
import { Switcher } from "./sections/Switcher";

const DocSpaceDeveloperTemplate = () => {
  return (
    <>
      <StyledDocSpaceDeveloperColorWrapper>
        <Hero />
        <Switcher />
      </StyledDocSpaceDeveloperColorWrapper>
    </>
  );
};

export { DocSpaceDeveloperTemplate };