import { Link } from "@src/components/ui/Link";
import styled, { keyframes } from "styled-components";
import { ILogo } from "../../data/logos";
import { device } from "@src/utils/device";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  height: 76px;
  position: relative;
  margin: 0 auto;

  &:hover .marquee-inner,
  &:has(.marquee-inner:active) .marquee-inner {
    animation-play-state: paused;
  }

  @media ${device.mobile} {
    height: 64px;
  }
`;

const MarqueeInner = styled.div`
  display: flex;
  min-width: max-content;
  animation: ${scroll} 60s linear infinite;
`;

const LogoContainer = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  transition: opacity 0.2s ease;
  margin: 0 12px;

  &:hover {
    span {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    margin: 0 4px;
  }
`;

const StyledLogoLink = styled(Link)<{
  $positionY: ILogo["positionY"];
  $mobilePositionY: ILogo["mobilePositionY"];
}>`
  &::before {
    content: "";
    display: block;
    width: 168px;
    height: 48px;
    background-image: url("/images/templates/contribute/spread/connectors.svg");
    background-size: 168px auto;
    background-position: center ${({ $positionY }) => $positionY || "0px"};
    margin-bottom: 8px;

    @media ${device.mobile} {
      width: 126px;
      height: 36px;
      background-size: 126px auto;
      background-position-y: ${({ $mobilePositionY, $positionY }) =>
        $mobilePositionY || $positionY};
    }
  }
`;

const StyledLogoText = styled.span`
  display: block;
  opacity: 0;
  font-size: 14px;
  line-height: 20px;
  color: #ff6f3d;
  text-decoration: underline;
  transition: opacity 0.2s ease;
`;

export {
  MarqueeWrapper,
  MarqueeInner,
  LogoContainer,
  StyledLogoLink,
  StyledLogoText,
};
