import styled from "styled-components";
import { IFeatureConnectorCard } from "./FeatureConenctorCard.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledFeatureConnectorCard = styled(Link)`
  border-radius: 5px;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  transition: box-shadow 0.2s;

  .feature-connector-card-more-info {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;

    @media ${device.mobile} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:hover,
  &:focus-visible {
    box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);

    .feature-connector-card-more-info {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const StyledFeatureConnectorCardImgWrapper = styled.div<{
  $imgBgColor: IFeatureConnectorCard["imgBgColor"];
}>`
  border-radius: 5px;
  padding: 24px 32px;
  background-color: ${({ $imgBgColor }) => $imgBgColor};
`;

const StyledFeatureConnectorCardImg = styled.div<{
  $imgUrl: IFeatureConnectorCard["imgUrl"];
}>`
  width: 100%;
  height: 40px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledFeatureConnectorCardBody = styled.div`
  padding: 16px;
`;

const StyledFeatureConnectorCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const StyledFeatureConnectorCardHeading = styled.div`
  h4 {
    display: inline;

    &:not(:last-child) {
      margin-right: 6px;
    }
  }
`;

export {
  StyledFeatureConnectorCard,
  StyledFeatureConnectorCardImgWrapper,
  StyledFeatureConnectorCardImg,
  StyledFeatureConnectorCardBody,
  StyledFeatureConnectorCardHeader,
  StyledFeatureConnectorCardHeading,
};
