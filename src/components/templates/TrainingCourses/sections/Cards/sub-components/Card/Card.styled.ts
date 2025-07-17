import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Badge } from "@src/components/ui/Badge";

const StyledCard = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCardTop = styled.div`
  min-height: 160px;
  background-image: url("/images/templates/training-courses/cards/bg_box_2.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledCardNew = styled(Badge)`
  position: absolute;
  top: 28px;
  left: 32px;
  border: 1px solid #FF6F3D;
  border-radius: 1px;
  padding: 2px 4px;
`;

const StyledCardIcon = styled.div<{
  $iconUrl: string;
}>`
  width: 96px;
  height: 96px;
  background-image: ${({ $iconUrl }) => `url(${$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24px 32px 32px;
`;

const StyledCardDescription = styled.div`
  min-height: 350px;
  flex-grow: 1;
`;

const StyledCardTitle = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardSessions = styled(Text)``;

const StyledCardHours = styled(Text)``;

const StyledCardPrice = styled(Text)`
  & span {
    color: #FF6F3D;
  }
`;

const StyledCardText = styled(Text)`
  margin-top: 16px;
`;

const StyledCardReadMore = styled.span`
  color: #FF6F3D;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const StyledCardBottom = styled.div`
  margin-top: 16px;
`;

const StyledCardButton = styled(Button)`
  width: 100%;
`;

export {
  StyledCard,
  StyledCardTop,
  StyledCardNew,
  StyledCardIcon,
  StyledCardContentWrapper,
  StyledCardDescription,
  StyledCardTitle,
  StyledCardSessions,
  StyledCardHours,
  StyledCardPrice,
  StyledCardText,
  StyledCardReadMore,
  StyledCardBottom,
  StyledCardButton,
};