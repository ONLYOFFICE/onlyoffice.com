import {
  StyledCardText,
  StyledCardTitle,
  StyledTeamworkCard,
} from "./TeamworkCard.styled";
import { ITeamworkCard } from "./TeamworkCard.types";

const TeamworkCard = ({
  title,
  text,
  image,
  color,
  bgColor,
  borderColor,
}: ITeamworkCard) => {
  return (
    <StyledTeamworkCard $bgColor={bgColor} $borderColor={borderColor}>
      <StyledCardTitle $image={image} $color={color} level={3} label={title} />
      <StyledCardText $color={color} label={text} />
    </StyledTeamworkCard>
  );
};

export { TeamworkCard };
