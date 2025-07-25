import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHeroSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 112px;

    @media ${device.tabletS} {
      margin-bottom: 88px;
    }

    @media ${device.mobile} {
      margin-bottom: 48px;
    }
  }
`;

const StyledHeroDescription = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;

  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyledHeroBanner = styled.div`
  margin-top: 32px;
`;

const StyledHeroProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
    margin-top: 24px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroDescription,
  StyledHeroBanner,
  StyledHeroProducts,
};
