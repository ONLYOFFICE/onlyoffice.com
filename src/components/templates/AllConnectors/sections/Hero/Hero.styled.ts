import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroHeading = styled(Heading)`
  margin: 0 auto 40px;
  max-width: 868px;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroSubHeading = styled(Heading)`
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledHeroItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  padding: 16px 40px 40px;
  margin: -16px -40px -40px;
  overflow-x: auto;

  @media ${device.desktop} {
    padding: 16px 48px 40px;
    margin: -16px -48px -40px;
  }

  @media ${device.tablet} {
    padding: 16px 40px 40px;
    margin: -16px -40px -40px;
  }

  @media ${device.mobile} {
    padding: 16px 16px 40px;
    margin: -16px -16px -40px;
  }
`;

export { StyledHeroHeading, StyledHeroSubHeading, StyledHeroItems };
