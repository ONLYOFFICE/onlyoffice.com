import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledDocSpaceHeading = styled(Heading)`
  max-width: 928px;
  margin: 0 auto 24px;
  text-align: center;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledDocSpaceText = styled(Text)`
  max-width: 928px;
  margin: 0 auto 72px;
  font-size: 18px;
  line-height: 150%;
  text-align: center;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    margin: 0 auto 56px;
    font-size: 14px;
  }
`;

const StyledDocSpaceFeatures = styled.div`
  display: grid;
  row-gap: 72px;
  margin-bottom: 72px;

  @media ${device.mobile} {
    margin-bottom: 56px;
    row-gap: 56px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 72px;

  @media ${device.mobile} {
    margin-bottom: 56px;
  }
`;

export {
  StyledDocSpaceHeading,
  StyledDocSpaceText,
  StyledDocSpaceFeatures,
  StyledButtonWrapper,
};
