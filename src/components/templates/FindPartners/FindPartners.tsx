import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { Join } from "./sections/Join";
import { IPartners } from "./FindPartners.types";

import { StyledFinPartnersWrapper } from "./FindPartners.styled";

const FindPartnersTemplate = ({ partners }: IPartners) => {
  return (
    <>
      <StyledFinPartnersWrapper>
        <Hero />
        <Partners partners={partners} />
      </StyledFinPartnersWrapper>
      <Join />
    </>
  );
};

export { FindPartnersTemplate };