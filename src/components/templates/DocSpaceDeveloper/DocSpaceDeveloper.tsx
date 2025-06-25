import { Hero } from "./sections/Hero";

import { StyledDocSpaceDeveloperColorWrapper } from "./DocSpaceDeveloper.styled";

const DocSpaceDeveloperTemplate = () => {
  return (
    <>
      <StyledDocSpaceDeveloperColorWrapper>
        <Hero />
      </StyledDocSpaceDeveloperColorWrapper>
    </>
  );
};

export { DocSpaceDeveloperTemplate };