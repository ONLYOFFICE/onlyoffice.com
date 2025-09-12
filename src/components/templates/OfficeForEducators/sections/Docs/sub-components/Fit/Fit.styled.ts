import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IFit } from "./Fit.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFitWrapper = styled.div`
  padding: 72px 0;
  text-align: center;

  @media ${device.mobile} {
    padding: 56px 0;
    text-align: initial;

    a {
      font-size: 14px;
    }
  }
`;

const StyledFitTitle = styled(Heading)`
  position: relative;
  padding-top: 80px;
  margin-bottom: 16px;
  color: #444;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 64px;
    background-image: url(${getAssetUrl('/images/templates/office-for-educators/sprites/icons.svg')});
    background-repeat: no-repeat;
    background-position: -20px center;

    @media ${device.mobile} {
      left: 0;
      transform: none;
    }
  }

  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    margin-bottom: 8px;
    line-height: 24px;
  }
`;

const StyledFitText = styled(Text)`
  max-width: 736px;
  margin: 0 auto 56px;
  font-size: 16px;
  line-height: 150%;
  color: #666;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    font-size: 13px;
  }
`;

const StyledConnectorsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  margin-bottom: 56px;

  @media ${device.tablet} {
    margin: 0 -40px 56px;
    padding: 0 40px;
    overflow-x: auto;
    scrollbar-width: none;
    justify-content: left;
  }

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    gap: 24px;
    margin: 0 -16px 16px;
    padding: 0 16px;
  }
`;

const StyledConnector = styled(Link)<{
  $desktopWidth: IFit["desktopWidth"];
  $mobileWidth: IFit["mobileWidth"];
  $desktopPositionX: IFit["desktopPositionX"];
  $mobilePositionX: IFit["mobilePositionX"];
}>`
  min-width: ${({ $desktopWidth }) => $desktopWidth};
  max-width: ${({ $desktopWidth }) => $desktopWidth};
  height: 48px;
  background-image: url(${getAssetUrl('/images/templates/office-for-educators/sprites/logos.svg')});
  background-repeat: no-repeat;
  background-position: ${({ $desktopPositionX }) => $desktopPositionX} center;
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover {
    filter: grayscale(0);
  }

  @media ${device.mobile} {
    min-width: ${({ $mobileWidth }) => $mobileWidth};
    height: 32px;
    background-size: auto 58px;
    background-position: ${({ $mobilePositionX }) => $mobilePositionX} center;
  }
`;

export {
  StyledFitWrapper,
  StyledFitTitle,
  StyledFitText,
  StyledConnectorsWrapper,
  StyledConnector,
};
