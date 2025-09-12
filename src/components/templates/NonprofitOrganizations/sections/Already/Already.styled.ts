import styled, { keyframes } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledAlreadyHeading = styled(Heading)<{
  $isVisible: boolean;
}>`
  margin-bottom: 40px;

  & span {
    color: #FF6F3D;
    display: inline-block;
    opacity: 0;
    animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.5s forwards;
  }
`;

const StyledAlreadyText = styled(Text)`
  margin-bottom: 40px;
`;

const StyledAlreadyButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 80px;

  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const StyledAlreadyImage = styled.div`
  height: 390px;
  background-image: url(${getAssetUrl('/images/templates/nonprofit-organizations/already/already-image.svg')});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media ${device.tabletS} {
    height: 221px;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export {
  StyledAlreadyHeading,
  StyledAlreadyText,
  StyledAlreadyButtonsWrapper,
  StyledAlreadyImage
}