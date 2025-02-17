import styled from "styled-components";
import starsRatingIcon from "@public/images/icons/stars-rating.svg";

const StyledStarsRating = styled.div<{ $value: number }>`
  position: relative;
  width: 90px;
  height: 18px;
  background-image: url(${starsRatingIcon.src});
  background-repeat: no-repeat;
  background-position-y: -30px;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.$value}%;
    height: 100%;
    background-image: url(${starsRatingIcon.src});
  }
`;

export { StyledStarsRating };
