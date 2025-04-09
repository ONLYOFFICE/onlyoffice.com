import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const StyledPortfolioHeading = styled(Heading)`
  max-width: 736px;
  margin: 0 auto;
`;

const StyledPortfolioText = styled(Text)`
  max-width: 736px;
  margin: 24px auto 56px;
  text-align: center;
  font-size: 18px;
  line-height: 150%;

  @media ${device.tabletS} {
    font-size: 16px;
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

const StyledPortfolio = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tabletS} {
    margin: 0 -40px;
  }

  @media ${device.mobile} {
    margin: 0 -16px;
  }
`;

export { StyledPortfolioHeading, StyledPortfolioText, StyledPortfolio };
