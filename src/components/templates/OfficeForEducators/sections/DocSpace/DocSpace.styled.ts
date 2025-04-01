import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledDocSpaceHeading = styled(Heading)`
  max-width: 928px;
  margin: 0 auto 24px;
  font-size: 40px;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${device.tabletS} {
    font-size: 36px;
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledDocSpaceText = styled(Text)`
  max-width: 928px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 150%;
  text-align: center;

  @media ${device.tabletS} {
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledDocSpaceFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 72px 0;

  @media ${device.mobile} {
    padding: 48px 0 56px;
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
