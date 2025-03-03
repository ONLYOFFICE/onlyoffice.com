import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledWatchVideo = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 214px auto;
  column-gap: 24px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 24px;
  margin: 0 auto;
  max-width: 560px;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border: 1px solid #666666;
    box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);
  }

  @media ${device.tabletS} {
    grid-template-columns: 160px auto;
    column-gap: 16px;
    max-width: 508px;
  }

  @media ${device.mobile} {
    grid-template-columns: 107px auto;
    padding: 16px;
    max-width: 288px;
  }
`;

const StyledWatchVideoImg = styled.div<{ $videoImgUrl: string }>`
  position: relative;
  padding-bottom: 56.08%;
  background-image: url(${(props) => props.$videoImgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translate(-50%, -50%);
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(50% + 1px);
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6.5px 0 6.5px 11px;
    border-color: transparent transparent transparent #ffffff;
    transform: rotate(0deg);
    transform: translate(calc(-50%), -50%);
    color: #ffffff;
  }
`;

const StyledWatchVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledWatchVideoHeading = styled(Heading)`
  margin-bottom: 8px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledWatchVideoLabel = styled.button`
  border: none;
  font-size: 16px;
  line-height: 21px;
  color: #ff6f3d;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledWatchVideoModal = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export {
  StyledWatchVideo,
  StyledWatchVideoImg,
  StyledWatchVideoWrapper,
  StyledWatchVideoHeading,
  StyledWatchVideoLabel,
  StyledWatchVideoModal,
};
