import styled from "styled-components";
import { IYouTubeCard } from "./YouTubeCard.types";
import { device } from "@src/utils/device";

const StyledYouTubeCard = styled.div<{
  $border: IYouTubeCard["border"];
  $borderRadius: IYouTubeCard["borderRadius"];
}>`
  border: ${(props) => (props.$border ? "5px solid #ffffff" : "none")};
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "0"};
`;

const StyledYouTubeCardImg = styled.div<{
  $videoImgUrl: IYouTubeCard["videoImgUrl"];
}>`
  position: relative;
  border: 5px solid #ffffff;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  background-image: url(${(props) => props.$videoImgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 801px;
  height: 451px;

  &::before {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    content: "";
    height: 100px;
    left: calc(50% - 50px);
    opacity: 0.6;
    position: absolute;
    top: calc(50% - 50px);
    width: 100px;

    @media ${device.mobile} {
      height: 50px;
      width: 50px;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
    }
  }
  &::after {
    border-top: 13px solid transparent;
    border-left: 22px solid white;
    border-bottom: 13px solid transparent;
    color: #ffffff;
    content: "";
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 14px);

    @media ${device.mobile} {
      border-top: 6px solid transparent;
      border-left: 11px solid white;
      border-bottom: 6px solid transparent;
      left: calc(50% - 4px);
      top: calc(50% - 7px);
    }
  }

  @media ${device.tablet} {
     height: auto;
    aspect-ratio: 1.77;
    width: 100%;
    background-size: contain;
  }
  @media ${device.mobile} {
   
  }
`;

const StyledYouTubeCardModal = styled.div`
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

export { StyledYouTubeCard, StyledYouTubeCardImg, StyledYouTubeCardModal };
