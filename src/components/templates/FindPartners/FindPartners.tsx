import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";

import { StyledFinPartnersWrapper } from "./FindPartners.styled";

const FindPartnersTemplate = () => {
  return (
    <StyledFinPartnersWrapper>
      <Hero />
      <Partners />
    </StyledFinPartnersWrapper>
  );
};

export { FindPartnersTemplate };