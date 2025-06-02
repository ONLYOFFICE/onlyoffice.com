import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { Join } from "./sections/Join";

import { StyledFinPartnersWrapper } from "./FindPartners.styled";

const FindPartnersTemplate = () => {
  return (
    <>
      <StyledFinPartnersWrapper>
        <Hero />
        <Partners />
      </StyledFinPartnersWrapper>
      <Join />
    </>
  );
};

export { FindPartnersTemplate };