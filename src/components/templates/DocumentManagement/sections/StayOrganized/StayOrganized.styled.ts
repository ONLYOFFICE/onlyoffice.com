import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledStayOrganizedWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 35px;
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledStayOrganizedContent = styled.div`
  display: grid;
  gap: 48px;

  @media ${device.tablet} {
    text-align: center;
    gap: 32px;
  }

  @media ${device.mobile} {
    text-align: start;
  }
`;

const StyledStayOrganizedFeatures = styled.div`
  display: grid;
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    text-align: start;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StyledStayOrganizedFeaturesItem = styled.div`
  display: grid;
  gap: 16px;
`;

const StyledStayOrganizedFeaturesText = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  color: #666666;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 22px;
  }
`;

const StyledStayOrganizedImage = styled.div<{ $image: string }>`
  padding-bottom: 75.2%;
  width: 100%;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tablet} {
    width: 548px;
    height: 408px;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 215px;
  }
`;

export {
  StyledStayOrganizedWrapper,
  StyledStayOrganizedContent,
  StyledStayOrganizedFeatures,
  StyledStayOrganizedFeaturesItem,
  StyledStayOrganizedFeaturesText,
  StyledStayOrganizedImage,
};
