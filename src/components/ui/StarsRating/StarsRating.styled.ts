import styled from "styled-components";

const StyledStarsRating = styled.div<{ $value: number }>`
  position: relative;
  width: 90px;
  height: 18px;
  background-image: url("/images/icons/stars-rating.svg");
  background-repeat: no-repeat;
  background-position-y: -30px;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.$value}%;
    height: 100%;
    background-image: url("/images/icons/stars-rating.svg");
  }
`;

export { StyledStarsRating };
