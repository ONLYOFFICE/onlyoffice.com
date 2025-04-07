import {
  StyledTeamworkCard,
  StyledTeamworkCardHeading,
  StyledTeamworkCardText,
} from "./TeamworkCard.styled";
import { ITeamworkCard } from "./TeamworkCard.types";

const TeamworkCard = ({
  heading,
  text,
  image,
  color,
  bgColor,
  borderColor,
}: ITeamworkCard) => {
  return (
    <StyledTeamworkCard $bgColor={bgColor} $borderColor={borderColor}>
      <StyledTeamworkCardHeading
        $image={image}
        $color={color}
        level={3}
        label={heading}
      />
      <StyledTeamworkCardText $color={color} label={text} />
    </StyledTeamworkCard>
  );
};

export { TeamworkCard };
