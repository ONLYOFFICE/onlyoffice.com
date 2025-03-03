import React from "react";
import { Stars } from "./StarRating.styled";
import { IStarRatingProps } from "./StarRating.types";

const StarRating: React.FC<IStarRatingProps> = ({ rating }) => {
  return (
    <Stars rating={rating}></Stars>
  );
};

export default StarRating;
