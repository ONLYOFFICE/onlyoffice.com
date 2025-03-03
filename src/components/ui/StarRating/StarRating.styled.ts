import styled from "styled-components";
import star from "@public/images/icons/rating-stars.svg";
import { IStarRatingProps } from "./StarRating.types";

export const Stars = styled.div<IStarRatingProps>`
  width: 90px;
  height: 18px;
  background-position-y: -30px;
  background-image: url(${star.src});

  &::before {
    content: "";
    display: block;
    width: ${(props) => Math.round((props.rating / 5) * 90 + 1)}px;
    height: 18px;
    background-image: url(${star.src});
    background-repeat: no-repeat;
  }
`;
