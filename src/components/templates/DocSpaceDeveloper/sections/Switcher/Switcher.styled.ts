import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";

const StyledSwitcherHeading = styled(Heading)`
  margin-bottom: 64px;

  @media ${device.tabletS} {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const StyledSwitcherWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media ${device.tabletS} {
    flex-direction: column-reverse;
  }
`;

const StyledSwitcherDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;

  @media ${device.tablet} {
    max-width: 35vw;
  }

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const StyledSwitcherScroll = styled.div`
  width: 4px;
  height: 100%;
  background-color: #666666;
  border-radius: 2px;
  position: relative;
`;

const StyledSwitcherProgressBar = styled.div<{
  $height: number;
  $translateY: number;
}>`
  width: 4px;
  height: ${({ $height }) => `${$height}px`};
  background-color: #ff6f3d;
  border-radius: 2px;
  position: absolute;
  top: 0;
  transform: translateY(${({ $translateY }) => `${$translateY}px`});
  transition: all 1s;
`;

const StyledSwitcherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: relative;

  @media ${device.tabletS} {
    gap: 24px;
  }
`;

const StyledSwitcherInfo = styled.div`
  max-width: 420px;

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;


const StyledSwitcherTitle = styled.h3<{
  $isActive: boolean;
}>`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33em;
  letter-spacing: -0.02em;
  color: ${({ $isActive }) => $isActive ? "#ff6f3d" : "#fff"};
  margin-bottom: 16px;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    color: #ff6f3d;
  }
`;

const StyledSwitcherHiderWrapper = styled.div<{
  $isActive: boolean;
}>`
  display: ${({ $isActive }) => $isActive ? "block" : "none"};
  opacity: ${({ $isActive }) => $isActive ? "1" : "0"};
  transition-duration: 800ms;

  @starting-style {
    opacity: 0;
  }
`;

const StyledSwitcherText = styled(Text)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    font-size: 14px;
  }
`;

const StyledSwitcherLink = styled(Link)`
  position: relative;
  padding-left: 24px;
  display: inline-block;

  @media ${device.tabletS} {
    font-size: 13px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 18px;
    height: 18px;
    background-image: url("/images/icons/arrow-in-circle.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

const StyledSwitcherImageWrapper = styled.div`
  position: relative;
  width: 640px;
  aspect-ratio: 1.29;

  @media ${device.tablet} {
    width: 53vw;
  }

  @media ${device.tabletS} {
    width: 100%;
  }
`;

const StyledSwitcherImage = styled.div<{
  $isActive: boolean;
  $imageUrl: string;
  $imageUrl2x: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: 640px auto;
  background-repeat: no-repeat;
  background-position: 0 0;
  visibility: ${({ $isActive }) => $isActive ? "visible" : "hidden"};
  opacity: ${({ $isActive }) => $isActive ? "1" : "0"};
  transition-duration: 300ms;

  @media ${device.tablet} {
    background-size: 53vw auto;
  }

  @media ${device.tabletS} {
    background-size: cover;
  }

  @media ${device.retina} {
    background-image: url(${({ $imageUrl2x }) => $imageUrl2x});
  }
`;



export {
  StyledSwitcherHeading,
  StyledSwitcherWrapper,
  StyledSwitcherDescription,
  StyledSwitcherScroll,
  StyledSwitcherProgressBar,
  StyledSwitcherInfo,
  StyledSwitcherInfoWrapper,
  StyledSwitcherTitle,
  StyledSwitcherHiderWrapper,
  StyledSwitcherText,
  StyledSwitcherLink,
  StyledSwitcherImageWrapper,
  StyledSwitcherImage
};