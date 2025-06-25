import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledDiscoverHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const StyledDiscoverWrapper = styled.div`
  max-width: 100%;
  padding: 0 20px;
  user-select: none;

  & .swiper-slide {
    width: 300px;
  }
`;

const StyledDiscoverSlide = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #afafaf;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #dadada;
    z-index: 0;
  }
`;

const StyledDiscoverSlideHeading = styled(Heading)`
  margin-top: 60px;
  padding-right: 25px;
`;

const StyledDiscoverSlideText = styled.div`
  margin-top: 32px;
  padding-right: 50px;
  color: #424242;
  font-size: 15px;
  line-height: 20px;

  & > p {
    padding: 10px 0;
  }
`;

const StyledDiscoverProgressWrapper = styled.div`
  margin: 25px auto;
  width: 200px;
  height: 1px;
  background: #ddd;
  border-radius: 4px;
  position: relative;
  pointer-events: none;
`;

const StyledDiscoverProgressBar = styled.div`
  height: 100%;
  background: orange;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.05s linear;
  pointer-events: none;
`;

const StyledDiscoverProgressBarHandle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url("/images/templates/about/discover/runner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: absolute;
  top: -10px;
  left: -10px;
  pointer-events: visible;
`;

export {
  StyledDiscoverHeading,
  StyledDiscoverWrapper,
  StyledDiscoverSlide,
  StyledDiscoverSlideHeading,
  StyledDiscoverSlideText,
  StyledDiscoverProgressWrapper,
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle
};