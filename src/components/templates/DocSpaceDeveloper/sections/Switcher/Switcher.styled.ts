import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledSwitcherHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const StyledSwitcherWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const StyledSwitcherDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
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
}>`
  width: 4px;
  height: ${({ $height }) => `${$height}px`};
  background-color: #ff6f3d;
  border-radius: 2px;
  position: absolute;
  top: 0;
  transition: all 1s;
`;

const StyledSwitcherInfoWrapper = styled.div``;

const StyledSwitcherInfo = styled.div`
  max-width: 420px;
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
  transition-duration: 200ms;
  cursor: pointer;
`;

const StyledSwitcherText = styled(Text)`
  margin-bottom: 16px;
`;

const StyledSwitcherLink = styled(Link)`
  position: relative;
  padding-left: 24px;

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
`;

const StyledSwitcherImage = styled.div<{
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
  StyledSwitcherText,
  StyledSwitcherLink,
  StyledSwitcherImageWrapper,
  StyledSwitcherImage
};