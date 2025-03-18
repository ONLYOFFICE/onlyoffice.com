import {
  StyledCardText,
  StyledCardTitle,
  StyledTeamworkCard,
} from "../Teamwork.styled";
import { ITeamworkCard } from "./TeamworkCard.types";

const TeamworkCard = ({ type, title, text }: ITeamworkCard) => {
  return (
    <StyledTeamworkCard $type={type}>
      <StyledCardTitle level={3} label={title} />
      <StyledCardText label={text} />
    </StyledTeamworkCard>
  );
};

export { TeamworkCard };
