import styled from "styled-components";

const StyledDiscoverWrapper = styled.div`
  max-width: 100%;
  margin: 50px auto;
  padding: 0 20px;
  user-select: none;

  & .swiper-slide {
    width: 300px;
  }
`;

const StyledDiscoverSlide = styled.div`
  background: #f4f4f4;
  height: 150px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 8px;

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
  StyledDiscoverWrapper,
  StyledDiscoverSlide,
  StyledDiscoverProgressWrapper,
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle
};