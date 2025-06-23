import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledVideoWrapper = styled.div`
  max-width: 508px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 180px auto;
  gap: 16px;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  transition: all 0.2s ease;

  &:hover {
    transition: 0.3s;
    border: 1px solid #666666;
    box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);
  }

  @media ${device.mobile} {
    width: 286px;
    grid-template-columns: 120px auto;
    padding: 16px;
  }
`;

const StyledVideo = styled.div`
  width: 100%;
  height: 90px;
  background-image: url("./images/templates/workspace/video/workspace.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    opacity: 0.6;

    @media ${device.mobile} {
      width: 28px;
      height: 28px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 51%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    border-top: 8px solid transparent;
    border-left: 14px solid white;
    border-bottom: 8px solid transparent;

    @media ${device.mobile} {
      border-top: 4px solid transparent;
      border-left: 6px solid white;
      border-bottom: 4px solid transparent;
    }
  }

  @media ${device.mobile} {
    height: 52px;
  }
`;

const StyledVideoContent = styled.div`
  display: grid;
  gap: 8px;
`;

const StyledVideoTitle = styled(Heading)`
  font-size: 16px;
  line-height: 133%;

  span:nth-child(1) {
    @media ${device.mobile} {
      display: none;
    }
  }

  span:nth-child(2) {
    display: none;

    @media ${device.mobile} {
      display: block;
    }
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledVideoDescription = styled(Text)`
  @media ${device.mobile} {
    display: none;
  }
`;

const StyledWatchVideoModal = styled.div`
  position: relative;
  padding-bottom: 56.18%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`;

export {
  StyledVideoWrapper,
  StyledVideo,
  StyledVideoContent,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledWatchVideoModal
};
