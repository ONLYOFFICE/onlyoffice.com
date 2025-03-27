import styled from "styled-components";
import { device } from "@src/utils/device";
import { ITeamworkCard } from "./TeamworkCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledTeamworkCard = styled.div<{
  $bgColor: ITeamworkCard["bgColor"];
  $borderColor: ITeamworkCard["borderColor"];
}>`
  border: 1px solid
    ${(props) => (props.$borderColor ? props.$borderColor : "#cccccc")};
  border-radius: 6px;
  padding: 32px;
  width: 100%;
  background: ${(props) => props.$bgColor};

  @media ${device.tabletS} {
    padding: 16px;
  }
`;

const StyledCardTitle = styled(Heading)<{
  $image: ITeamworkCard["image"];
  $color: ITeamworkCard["color"];
}>`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  color: ${(props) => props.$color};

  &::before {
    content: "";
    display: inline-block;
    width: 56px;
    min-width: 56px;
    height: 56px;
    background-image: ${(props) => `url(${props.$image.url})`};
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: ${(props) => props.$image.positionX};
  }

  @media ${device.tabletS} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledCardText = styled(Text)<{ $color: ITeamworkCard["color"] }>`
  font-size: 18px;
  line-height: 1.5em;
  color: ${(props) => (props.$color ? props.$color : "#666666")};

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export { StyledTeamworkCard, StyledCardTitle, StyledCardText };
