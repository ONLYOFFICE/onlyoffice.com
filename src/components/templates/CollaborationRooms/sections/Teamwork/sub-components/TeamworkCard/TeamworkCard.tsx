import {
  StyledCardText,
  StyledCardTitle,
  StyledTeamworkCard,
} from "./TeamworkCard.styled";
import { ITeamworkCard } from "./TeamworkCard.types";

const TeamworkCard = ({
  title,
  text,
  background,
  borderColor,
}: ITeamworkCard) => {
  return (
    <StyledTeamworkCard $background={background} $borderColor={borderColor}>
      <StyledCardTitle level={3} label={title} />
      <StyledCardText label={text} />
    </StyledTeamworkCard>
  );
};

export { TeamworkCard };
