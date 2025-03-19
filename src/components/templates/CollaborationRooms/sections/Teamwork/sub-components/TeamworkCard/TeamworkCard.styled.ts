import { device } from "@src/utils/device";
import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ITeamworkCard } from "./TeamworkCard.types";

const StyledCardTitle = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  line-height: 133%;
  font-weight: 700;

  &::before {
    content: "";
    display: inline-block;
    width: 56px;
    height: 56px;
    background-image: url("/images/templates/collaboration-rooms/ideal-for-teamwork/teamwork-icons.svg");
    background-repeat: no-repeat;
    background-position-y: -20px;
  }

  @media ${device.tabletS} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const StyledCardText = styled(Text)`
  font-size: 18px;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledTeamworkCard = styled.div<{
  $background: ITeamworkCard["background"];
  $borderColor: ITeamworkCard["borderColor"];
}>`
  padding: 32px;
  border: 1px solid ${({ $borderColor }) => $borderColor || "#ccc"};
  background: ${({ $background }) => $background || "#fff"};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:nth-child(1) {
    width: calc(60% - 32px);
    margin-right: 32px;

    ${StyledCardTitle}::before {
      background-position-x: -18px;
    }

    @media ${device.mobile} {
      width: 100%;
      margin-right: 0;
    }
  }

  &:nth-child(2) {
    width: 40%;
    color: #fff;

    ${StyledCardTitle} {
      color: #fff;

      &::before {
        background-position-x: -94px;
      }
    }

    @media ${device.mobile} {
      width: 100%;
      order: -1;
    }
  }

  &:nth-child(3) {
    width: calc(40% - 32px);
    margin-right: 32px;

    ${StyledCardTitle}::before {
      background-position-x: -170px;
    }

    @media ${device.mobile} {
      width: 100%;
      margin-right: 0;
    }
  }

  &:nth-child(4) {
    width: 60%;

    ${StyledCardTitle}::before {
      background-position-x: -245px;
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    padding: 16px;
  }
`;

export { StyledTeamworkCard, StyledCardTitle, StyledCardText };
