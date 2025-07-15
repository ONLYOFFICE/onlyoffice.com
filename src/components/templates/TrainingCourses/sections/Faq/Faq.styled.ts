import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFaqHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tabletS} {
    text-align: center;
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

const StyledFaqList = styled.ul`
  padding-bottom: 112px;

  @media ${device.tablet} {
    padding-bottom: 80px;
  }

  @media ${device.mobile} {
    padding-bottom: 48px;
  }
`;

export {
  StyledFaqHeading,
  StyledFaqList,
}