import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledFeaturesHeader = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 0 auto 72px;
  max-width: 928px;
  text-align: center;

  @media ${device.tabletS} {
    text-align: center;
  }

  @media ${device.mobile} {
    margin: 0 auto 56px;
    row-gap: 16px;
  }
`;

const StyledFeaturesText = styled(Text)`
  @media ${device.tabletS} {
    font-size: 16px;
    text-align: initial;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 72px;

  h5 {
    font-size: 16px;
    line-height: 1.33em;
    letter-spacing: 0;
  }

  p {
    line-height: 1.6em;
    color: #666666;
    font-size: 14px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    margin-bottom: 56px;
  }
`;

export {
  StyledFeaturesHeader,
  StyledFeaturesText,
  StyledFeatures,
};
