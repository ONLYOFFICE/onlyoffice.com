import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { Link } from "@src/components/ui/Link";

const StyledFeaturesHeading = styled(Heading)`
  margin-bottom: 112px;

  @media ${device.tabletS} {
    font-size: 32px;
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

const StyledFeaturesFeatureImageItem = styled(FeatureImageItem)`
  & > div {
    margin-top: 0;

    & > div {
      row-gap: 0;
    }
  }
`;

const StyledFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledFeaturesItem = styled.li`
  padding-left: 25px;
`;

const StyledFeaturesItemHeading = styled(Heading)`
  margin-bottom: 16px;
  position: relative;

  @media ${device.mobile} {
    font-size: 13px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: -26px;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    background-color: #ff6f3d;
  }
`;

const StyledFeaturesItemText = styled(Text)`
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFeaturesButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;

  @media ${device.tabletS} {
    margin-bottom: 80px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 64px;
    text-align: center;

    & > a {
      width: 100%;
    }
  }
`;

const StyledFeaturesLink = styled(Link)`
  font-size: 14px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledFeaturesHeading,
  StyledFeaturesFeatureImageItem,
  StyledFeaturesItemHeading,
  StyledFeaturesList,
  StyledFeaturesItem,
  StyledFeaturesItemText,
  StyledFeaturesButtonWrapper,
  StyledFeaturesLink
}