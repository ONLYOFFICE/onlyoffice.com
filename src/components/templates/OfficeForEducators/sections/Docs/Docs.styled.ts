import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledDocsHeading = styled(Heading)`
  max-width: 876px;
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

const StyledDocsText = styled(Text)`
  max-width: 778px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 150%;
  text-align: center;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledDocsFeatures = styled.div`
  display: grid;
  row-gap: 72px;
  margin-bottom: 72px;

  @media ${device.mobile} {
    row-gap: 56px;
    margin-bottom: 56px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledFeatureItemText = styled.span`
  display: inline-block;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export {
  StyledDocsHeading,
  StyledDocsText,
  StyledDocsFeatures,
  StyledButtonWrapper,
  StyledFeatureItemText,
};
