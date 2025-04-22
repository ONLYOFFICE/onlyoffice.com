import styled, { keyframes } from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
`;

const StyledMarquee = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledMarqueeWrapper = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 60s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const StyledMarqueeText = styled(Text)`
  opacity: 0;
  transition: opacity 0.2s;
`;

const StyledMarqueeItem = styled(Link)`
  position: relative;
  margin: 0 12px;

  &:hover,
  &:focus-visible {
    ${StyledMarqueeText} {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    margin: 0 4px;
  }
`;

const StyledMarqueeImg = styled.img`
  width: 168px;
  height: 48px;
  object-fit: contain;

  @media ${device.mobile} {
    width: 126px;
    height: 36px;
  }
`;

export {
  StyledMarquee,
  StyledMarqueeWrapper,
  StyledMarqueeItem,
  StyledMarqueeText,
  StyledMarqueeImg,
};
