import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledFeaturesHeading = styled(Heading)`
  margin-bottom: 24px;
  text-align: center;
  line-height: 133%;

  @media ${device.tabletS} {
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const StyledFeaturesText = styled(Text)`
  max-width: 736px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  line-height: 150%;

  @media ${device.tabletS} {
    font-size: 16px;
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 72px 0;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    margin: 56px 0;
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
  StyledFeaturesHeading,
  StyledFeaturesText,
  StyledFeatures,
  StyledFeaturesButtonsWrapper,
};
