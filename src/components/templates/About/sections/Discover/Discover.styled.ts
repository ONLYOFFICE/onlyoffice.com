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
  margin-top: 20px;
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
`;

const StyledDiscoverProgressBar = styled.div`
  height: 100%;
  background: orange;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.05s linear;
  pointer-events: none;
`;

export {
  StyledDiscoverWrapper,
  StyledDiscoverSlide,
  StyledDiscoverProgressWrapper,
  StyledDiscoverProgressBar
};