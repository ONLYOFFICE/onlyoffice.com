import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { Join } from "./sections/Join";

import { StyledFinPartnersWrapper } from "./FindPartners.styled";
import { IPartners } from "./FindPartners.types";

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