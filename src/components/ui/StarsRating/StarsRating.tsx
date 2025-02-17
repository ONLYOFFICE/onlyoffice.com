import { StyledStarsRating } from "./StarsRating.styled";
import { IStarsRating } from "./StarsRating.types";

const StarsRating = ({ id, className, value }: IStarsRating) => {
  return (
    <StyledStarsRating
      id={id}
      className={className}
      $value={value}
    ></StyledStarsRating>
  );
};

export { StarsRating };
