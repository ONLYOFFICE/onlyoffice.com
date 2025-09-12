import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledProductiveWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 55px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 56px;
    margin-top: 60px;
  }

  @media ${device.mobile} {
    gap: 42px;
    margin-top: 32px;
  }
`;

const StyledProductiveIcon = styled.div<{
  $positionX: string;
  $mobilePositionX: string;
}>`
  width: 452px;
  height: 176px;
  margin-left: -50px;
  background-image: url(${getAssetUrl('/images/templates/document-management/productive/integrations.svg')});
  background-repeat: no-repeat;
  background-position: ${({ $positionX }) => $positionX} center;

  @media ${device.tablet} {
    width: 328px;
    height: 132px;
    margin-left: -34px;
    background-size: 648px;
    background-position: ${({ $mobilePositionX }) => $mobilePositionX} center;
  }
`;

const StyledProductiveContent = styled.div`
  display: grid;
  gap: 16px;
`;

const StyledProductiveLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 24px;
  }
`;

export {
  StyledProductiveWrapper,
  StyledProductiveIcon,
  StyledProductiveContent,
  StyledProductiveLink,
};
