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
    text-align: initial;
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

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    margin-bottom: 56px;
  }
`;

const StyledFeaturesButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export {
  StyledFeaturesHeader,
  StyledFeaturesText,
  StyledFeatures,
  StyledFeaturesButtonsWrapper,
};
