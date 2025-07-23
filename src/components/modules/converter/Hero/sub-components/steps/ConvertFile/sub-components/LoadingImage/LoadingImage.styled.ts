import styled, { keyframes } from "styled-components";
import { device } from "@src/utils/device";

const circleLeft = keyframes`
  0%, 5% {
    transform: rotate(0deg) translate(-117px) rotate(0deg);
  }
  45%, 55% {
    transform: rotate(180deg) translate(-117px) rotate(-180deg);
  }
  95%, 100% {
    transform: rotate(360deg) translate(-117px) rotate(-360deg);
  }
`;

const circleRight = keyframes`
  0%, 5% {
    transform: rotate(0deg) translate(117px) rotate(0deg);
  }
  45%, 55% {
    transform: rotate(180deg) translate(117px) rotate(-180deg);
  }
  95%, 100% {
    transform: rotate(360deg) translate(117px) rotate(-360deg);
  }
`;

const StyledLoadingImage = styled.svg`
  #loading-image-left-side {
    animation: ${circleLeft} 10s ease-in-out infinite;
  }

  #loading-image-right-side {
    animation: ${circleRight} 10s ease-in-out infinite;
  }

  @media ${device.mobile} {
    width: 248px;
    height: 248px;
  }
`;

export { StyledLoadingImage };
