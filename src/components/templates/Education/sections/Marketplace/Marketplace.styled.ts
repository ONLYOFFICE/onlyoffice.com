import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledMarketplaceWrapper = styled.div`
  max-width: 468px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 32px;
  padding-top: 199px;
  background-image: url("/images/templates/education/marketplace/education.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
  text-align: center;

  @media ${device.mobile} {
    padding-top: 90px;
    gap: 24px;
    background-size: 258px;
  }
`;

const StyledMarketplaceStars = styled.div`
  width: 144px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

const StyledMarketplaceQuote = styled(Text)`
  max-width: 430px;
  color: #808080;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

export {
  StyledMarketplaceWrapper,
  StyledMarketplaceStars,
  StyledMarketplaceQuote,
};
