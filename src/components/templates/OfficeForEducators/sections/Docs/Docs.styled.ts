import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledDocsHeading = styled(Heading)`
  max-width: 876px;
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

const StyledDocsText = styled(Text)`
  max-width: 788px;
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

const StyledDocsFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding-bottom: 72px;

  @media ${device.mobile} {
    padding-bottom: 56px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledLastItem = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFeatureItemTextWrapper = styled.span`
  display: grid;
  gap: 8px;
`;

export {
  StyledDocsHeading,
  StyledDocsText,
  StyledDocsFeatures,
  StyledButtonWrapper,
  StyledLastItem,
  StyledFeatureItemTextWrapper,
};
